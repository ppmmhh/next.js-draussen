'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function removeItem(experience) {
  const cookie = getCookie('cart');
  const experienceCookies = !cookie ? [] : parseJson(cookie);

  const removeExperience = experienceCookies.filter((experienceCookie) => {
    return experience.id !== experienceCookie.id;
  });

  await cookies().set('cart', JSON.stringify(removeExperience));
}

export async function reduceQuantity(experience) {
  const cookie = getCookie('cart');
  const experienceCookies = !cookie ? [] : parseJson(cookie);

  const decreaseExperience = experienceCookies?.find((experienceCookie) => {
    return experience.id === experienceCookie.id;
  });

  if (decreaseExperience.quantity > 1) {
    decreaseExperience.quantity -= 1;
  } else {
    decreaseExperience.quantity = 1;
  }

  await cookies().set('cart', JSON.stringify(experienceCookies));
}

export async function addQuantity(experience) {
  const cookie = getCookie('cart');
  const experienceCookies = !cookie ? [] : parseJson(cookie);

  const increaseExperience = experienceCookies?.find((experienceCookie) => {
    return experience.id === experienceCookie.id;
  });

  increaseExperience.quantity += 1;

  await cookies().set('cart', JSON.stringify(experienceCookies));
}
