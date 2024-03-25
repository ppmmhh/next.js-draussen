import { redirect } from 'next/navigation';
import { logout } from './actions';

export default function LogoutButton() {
  return (
    <div>
      <form>
        <button
          formAction={logout}
          onClick={() => {
            redirect('/login');
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
