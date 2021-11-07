import { useState } from 'react';
import { useLogin } from '../../hooks/useAuth';
import styles from './Login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const { mutate, isLoading, error, isError } = useLogin();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <form className={styles['login-form']} onSubmit={onSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input type="email" id="email" value={email} onChange={onChange} />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </label>
      <button className="btn" disabled={isLoading}>
        {isLoading ? 'loading' : 'Login'}
      </button>

      {isError && <p>{error.message}</p>}
    </form>
  );
}
