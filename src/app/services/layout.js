import "../globals.css";

export const metadata = {
  title: "Study Abroad Services | ViaCerta Abroad Complete Guidance",
  description:
    "Get complete study abroad services with ViaCerta — career counseling, course selection, university applications, visa processing, and pre-departure guidance. Let’s make it happen!",
};

export default function Layout({ children }) {
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
