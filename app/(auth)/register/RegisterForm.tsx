'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import ErrorMessage from '../../components/ErrorMessage';
import { RegisterResponseBodyPost } from '../api/register/route';
import styles from './RegisterForm.module.scss';

type Props = { returnTo?: string | string[] };

export default function RegisterForm(props: Props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        username,
        password,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: RegisterResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    );

    router.refresh();
  }

  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.form}>Register</h1>

        <form
          className={styles.form}
          onSubmit={async (event) => await handleRegister(event)}
        >
          <label>
            E-Mail
            <input
              placeholder="e-mail"
              className={styles.inputField}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </label>

          <label>
            Username
            <input
              placeholder="username"
              className={styles.inputField}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              className={styles.inputField}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </label>

          <button className={styles.button}>Register</button>

          <p className={styles.text}>
            Registered already? <a href="/login">Login here</a>
          </p>

          {errors.map((error) => (
            <div className="error" key={`error-${error.message}`}>
              <ErrorMessage>{error.message}</ErrorMessage>
            </div>
          ))}
        </form>
      </div>
    </section>
  );
}
