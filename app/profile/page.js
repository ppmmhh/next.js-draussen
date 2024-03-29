import Link from 'next/link';
import Navbar from '../navbar';
import styles from './profile.module.scss';

export const metadata = {
  title: 'Profile',
  description: 'This is your profile page',
};

export default function ProfilePage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.container}>
        <img src="/images/avatar.png" className={styles.avatar} alt="avatar" />
        <div className={styles.personal}>
          <div> Username: ppmmhh</div>
          <div> E-mail: pia@draussen.com</div>

          <div> Vienna, Austria</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <Link href="/contact">Contact</Link>

        <div className="socials">
          <img
            src="/images/socials.png"
            height={30}
            width={125}
            alt="socials"
          />
        </div>
      </footer>{' '}
    </div>
  );
}
