'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import ErrorMessage from '../../../app/ErrorMessage';
// import { getSafeReturnToPath } from '../../../util/validation';
import { RegisterResponseBodyPost } from '../api/register/route';

type Props = { returnTo?: string | string[] };

export default function RegisterForm(props: Props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Test');
    const response = await fetch('api/register', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: RegisterResponseBodyPost = await response.json();

    // if ('errors' in data) {
    //  setErrors(data.errors);
    //  return;
    // }
    // router.push(
    // getSafeReturnToPath(props.returnTo)
    //`/profile/${data.user.username}`,
    // );

    router.refresh();
  }

  return (
    <form onSubmit={async (event) => await handleRegister(event)}>
      <label>
        E-Mail
        <input onChange={(event) => setEmail(event.currentTarget.value)} />
      </label>

      <label>
        Username
        <input onChange={(event) => setUsername(event.currentTarget.value)} />
      </label>

      <label>
        Password
        <input
          type="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </label>

      <button>Register</button>
    </form>
  );
}
