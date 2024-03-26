'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { clearCookies } from './actions_clearcookies';

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <button
      data-test-id="checkout-confirm-order"
      onClick={async () => {
        await clearCookies();
        router.push('/checkout/thankyou'); // Adjusted the syntax here
      }}
    >
      Book
    </button>
  );
}
