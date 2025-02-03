import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Memory Game',
  description: 'Test your memory!',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gradient-to-br from-cyan-500 to-purple-900 bg-no-repeat min-h-screen">
        {children}
      </body>
    </html>
  );
}
