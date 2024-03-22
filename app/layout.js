import './globals.scss';
import Link from 'next/link';

// import CartBadge from './cart/CartBadge';

export const metadata = {
  title: {
    default: 'Home | draussen',
    template: '%s | draussen',
  },
  description: 'community hosting outdoor events',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <nav className="nav">
              <a href="/">
                <img
                  src="./images/logo_wo_bg.png"
                  alt="Logo"
                  className="logo"
                />
              </a>

              <Link
                href="/experiences"
                className="navText"
                data-test-id="experiences-link"
              >
                Experiences
              </Link>

              <Link href="/contact" className="navText">
                Contact
              </Link>

              <Link href="/profile" className="navText">
                Profile
              </Link>

              <div className="cart-icon" data-test-id="cart-link"></div>
            </nav>
          </div>
        </header>
        <main>{children}</main>

        <footer>© draussen 2024</footer>
      </body>
    </html>
  );
}
