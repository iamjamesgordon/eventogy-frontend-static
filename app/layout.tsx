import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/header/header';

import './globals.css';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Eventogy - Static',
  description: 'This is the Eventogy frontend dev task',
};

type ChildrenProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en' className={inter.variable}>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

/*

Components structure:

Globals
  - Button
  - Posts List
  - Page Title
  - Card
  - Filter
  - Logo
Header
  - Search Bar
  - Account
Layouts
  - Grid
  - Container

*/
