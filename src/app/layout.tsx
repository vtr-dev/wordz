import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Keyboard from './components/Keyboard';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wordz',
  description: 'A word game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-col justify-center items-center bg-primary-gray w-full h-screen">
          <Header />
          <div className="flex justify-center items-center h-[65%]">
            {children}
          </div>
          <Keyboard />
        </div>
      </body>
    </html>
  );
}
