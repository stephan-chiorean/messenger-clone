import '../styles/globals.css';
import Header from './Header';
import { Providers } from './providers';
import { getServerSession } from "next-auth/next"
export const metadata = {
  title: 'Meta Messenger',
  description: 'Cloned by Stephan Chiorean',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
