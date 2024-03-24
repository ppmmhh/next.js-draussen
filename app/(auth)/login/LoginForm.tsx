'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
// import ErrorMessage from '../../ErrorMessage';
import { LoginResponseBodyPost } from '../api/login/route';
import LoginButton from './LoginButton';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: LoginResponseBodyPost = await response.json();

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
      <div>
        <h1>Login to your account</h1>
        <form onSubmit={async (event) => await handleLogin(event)}>
          <div>
            <div>
              <label>
                <div>Username</div>
                <input
                  type="username"
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
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div className="text-center">
            <LoginButton />
          </div>
          <p>
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