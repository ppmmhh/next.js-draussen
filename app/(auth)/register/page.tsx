import React from 'react';
import RegisterForm from './RegisterForm';

type Props = {
  searchParams: {
    returnTo?: string | string[];
  };
};

export default function RegisterPage() {
  return <RegisterForm />;
}
