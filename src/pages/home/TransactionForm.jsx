import { useState } from 'react';
import useAddDoc from '../../hooks/useFirestore';

export default function TransactionForm({ uid }) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
  });

  const { name, amount } = formData;

  const { mutate: addDocument } = useAddDoc('transactions');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    addDocument(
      { uid, ...formData },
      {
        onSuccess: () => {
          setFormData({ name: '', amount: '' });
        },
      }
    );
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={onSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onChange}
            required
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={onChange}
            required
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}
