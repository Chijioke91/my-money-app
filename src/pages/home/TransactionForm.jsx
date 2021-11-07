import { useState } from 'react';

export default function TransactionForm() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
  });

  const { name, amount } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
