import React from 'react';
import RegisterForm from './RegisterForm';

type Props = {
  searchParams: {
    returnTo?: string | string[];
  };
};

export const metadata = {
  title: 'Registration',
  description: 'Join Us',
};

export default function RegisterPage() {
  return <RegisterForm />;
}
