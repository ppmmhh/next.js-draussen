'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type ExperienceCookie = {
  id: number;
  quantity: number;
};

export async function addToCart(experienceId: number, quantity: number) {
  const experiencesQuantityCookie = getCookie('cart');

  const experiencesQuantity = !experiencesQuantityCookie
    ? []
    : parseJson(experiencesQuantityCookie);

  const experienceToAdd = experiencesQuantity.find(
    (experienceQuantity: ExperienceCookie) => {
      return experienceQuantity.id === experienceId;
    },
  );

  if (!experienceToAdd) {
    experiencesQuantity.push({ id: experienceId, quantity: quantity });
  } else {
    experienceToAdd.quantity =
      Number(experienceToAdd.quantity) + Number(quantity);
  }

  await cookies().set('cart', JSON.stringify(experiencesQuantity));
}
