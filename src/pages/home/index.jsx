import useAuthContext from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useFirestore';
import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

export default function Home() {
  const { user } = useAuthContext();

  const {
    data: transactions,
    error,
    isError,
    isLoading,
  } = useCollection('transactions', ['uid', '==', user.uid]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {transactions && <TransactionList transactions={transactions} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
