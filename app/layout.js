import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // ✅ wajib import ini

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Portofolio Site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" // ganti dengan Measurement ID kamu
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q6V5ST8EXL'); // ganti juga di sini
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
