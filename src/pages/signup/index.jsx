import { useState } from 'react';
import { useSignUp } from '../../hooks/useAuth';
import styles from './Signup.module.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
  });

  const { mutate, isLoading, error, isError } = useSignUp();

  const { email, password, displayName } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    mutate(formData);
  };

  return (
    <form onSubmit={onSubmit} className={styles['signup-form']}>
      <h2>Sign Up</h2>
      <label>
        <span>email:</span>
        <input type="email" id="email" onChange={onChange} value={email} />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          id="password"
          onChange={onChange}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          id="displayName"
          onChange={onChange}
          value={displayName}
        />
      </label>

      <button className="btn" disabled={isLoading}>
        {isLoading ? 'loading' : 'sign up'}
      </button>

      {isError && <p>{error.message}</p>}
    </form>
  );
}
