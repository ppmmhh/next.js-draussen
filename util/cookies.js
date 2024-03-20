import { cookies } from 'next/headers';

// Optional chaining operator, if cookies().get('testCookie') is undefined return undefined

export function getCookie(name) {
  // const cookie = cookies().get(name);
  // if (!cookie) {
  //   return undefined;
  // }
  // return cookie.value;
  return cookies().get(name)?.value;
}
