import { cookies } from 'next/headers';
import { getValidSession } from '../../database/sessions';
import ExperiencesOverview from './ExperiencesOverview';

export const metadata = {
  title: 'Experiences ',
  description: 'Discover your next Outdoor Experience',
};

export default async function ExperiencesPage() {
  // This is no longer needed because we no run a secure query
  // const animals = await getAnimalsInsecure();

  // Task: Protect the dashboard page and redirect to login if the user is not logged in
  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie && (await getValidSession(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is invalid or doesn't exist, redirect to login with returnTo

  // 4. If the sessionToken cookie is valid, allow access to dashboard page
  // const hotels = await getHotels(session.token);
  return <ExperiencesOverview />;
}
