import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Study Abroad, Work & Succeed Globally – The ViaCerta Way",
  description:
    "Build your future with ViaCerta! Ace IELTS, TOEFL, GRE. Explore top courses, secure scholarships, get visa guidance & global job opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/viacertaLogo-white.png" />
        <link rel="canonical" href="https://viacertaabroad.com" />
      </head>
      <body className="antialiased">
        {children}

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GVW27HMVLB"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GVW27HMVLB');
          `}
        </Script>
      </body>
    </html>
  );
}
