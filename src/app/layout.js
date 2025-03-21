import "./globals.css";

export const metadata = {
  title: "ViaCerta Abroad | Study Abroad & Land Jobs– The ViaCerta Way",
  description: "Build your future with ViaCerta! Ace IELTS, TOEFL, GRE. Explore top courses, secure scholarships, get visa guidance & global job opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-lt-installed="true">
      <head>
        <link rel="icon" href="/viacertaLogo-white.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
