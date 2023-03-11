import '../styles/globals.css';
import Header from './Header';
export const metadata = {
  title: 'Meta Messenger',
  description: 'Cloned by Stephan Chiorean',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
