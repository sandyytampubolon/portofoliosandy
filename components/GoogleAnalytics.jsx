"use client";
import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Q6V5ST8EXL"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q6V5ST8EXL');
        `}
      </Script>
    </>
  );
}
