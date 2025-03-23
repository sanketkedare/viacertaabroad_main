import Script from 'next/script';
import "./globals.css";

export const metadata = {
  title: "Study Abroad, Work & Succeed Globally – The ViaCerta Way",
  description: "Build your future with ViaCerta! Ace IELTS, TOEFL, GRE. Explore top courses, secure scholarships, get visa guidance & global job opportunities.",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag() {
  //       window.dataLayer.push(arguments);
  //     }
  //     gtag('js', new Date());
  //     gtag('config', 'G-GVW27HMVLB');
  //   }
  // }, []);

  return (
    <html lang="en" data-lt-installed="true">
      <head>
        <link rel="icon" href="/viacertaLogo-white.png" />
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
