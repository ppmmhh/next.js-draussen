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

export const secureCookieOptions = {
  httpOnly: true,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60 * 24, // Expires after 1 day/24 hours
  // Be explicit about new default behavior
  // in browsers
  // https://web.dev/samesite-cookies-explained/
  sameSite: 'lax', // this prevents CSRF attacks
} as const;
