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
        <main>{children}</main>
      </body>
    </html>
  );
}
