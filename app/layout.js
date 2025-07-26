// app/layout.js
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',  
  description: 'Portofolio Site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}

