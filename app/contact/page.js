import Link from 'next/link';
import Navbar from '../navbar';
import styles from './contact.module.scss';

export const metadata = {
  title: 'Contact',
  description: 'Get it contact with us',
};

export default function ContactPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading1}>✿ Contact Us ✿</h1>
          <p className={styles.para1}>Let us know what's on your mind.</p>

          <form>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input className={styles.input} id="name" name="name" required />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                placeholder="I really love being draussen!"
                rows={5}
                required
              />
            </div>

            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
      <footer className={styles.footer}>
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
