'use client';

import "./globals.css";
import { Manrope } from 'next/font/google';
import Header from '@/app/components/Header/Header';

const manrope = Manrope({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <html lang="en" className={manrope.className}>
      <body>
      <div className= "page">
      <main className= "main">
      <Header tabs={[
      { href: '/', title: 'Home', iconLeft: 'HomeOutline' },
      { href: '/about', title: 'About', iconLeft: 'User' },
      { href: '/videos', title: 'Videos', iconLeft: 'YoutubeOutline' },
       ]}
      />
      {children}

        </main>
      </div>
      </body>
    </html>
  );
}
