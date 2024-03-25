'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { User } from '../../../database/users';
import ErrorMessage from '../../ErrorMessage';
import LoginButton from './LoginButton';
import styles from './LoginForm.module.scss';

type Props = { returnTo?: string | string[] };

export type LoginResponseBodyPost =
  | {
      user: Pick<User, 'username'>;
    }
  | {
      errors: { message: string }[];
    };

export default function LoginForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push(`/experiences`);
    if (props.returnTo) {
      router.push(props.returnTo);
    }
    router.refresh();
  }

  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.form}>Login</h1>
        <form onSubmit={async (event) => await handleLogin(event)}>
          <div>
            <div>
              <label>
                <div>Username</div>
                <input
                  placeholder="username"
                  type="username"
                  className={styles.inputField}
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>

          <div>
            <div>
              <label>
                <div> Password</div>
                <input
                  placeholder="••••••••"
                  type="password"
                  className={styles.inputField}
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <LoginButton />
          </div>
          <p className={styles.text}>
            Don't have an account already? <a href="/register">Register here</a>
          </p>
          <div>
            {errors.map((error) => (
              <div key={`error-${error.message}`}>
                <ErrorMessage>{error.message}</ErrorMessage>
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
