"use client";

import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'




const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <html lang="en" className={poppins.className}>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      <body>
      <div className= "page">
      <main className= "main">
      <Header tabs={[
      { href: '/', title: 'Home', iconLeft: 'HomeOutline' },
      { href: '/about', title: 'About', iconLeft: 'User' },
       ]}
      />
      <div className="page-content">
      {children}
      </div>
      

      <Footer> 
       {}
      </Footer>


        </main>
      </div>
      </body>
    </html>
  );
}
