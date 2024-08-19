import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daily News',
  description: 'The latest news from around the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Daily News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={clsx(inter.className, 'flex flex-col min-h-screen')}>
        {children}
      </body>
    </html>
  );
}
