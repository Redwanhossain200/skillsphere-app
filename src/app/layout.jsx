import { Poppins } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SkillSphere - Online Learning Platform',
  description:
    'Explore courses, watch lessons, and enroll in skill-based programs.',
};

import { CartProvider } from '@/context/CartContext';

export default async function RootLayout({ children }) {
  let session = null;
  try {
    const headerData = await headers();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/auth/get-session`,
      {
        headers: { cookie: headerData.get('cookie') || '' },
      },
    );
    if (res.ok) {
      session = await res.json();
      if (!session?.user) session = null;
    }
  } catch (error) {}

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-base-100 text-base-content font-sans overflow-x-hidden">
        <CartProvider>
          <ToastProvider />
          <Navbar session={session} />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
