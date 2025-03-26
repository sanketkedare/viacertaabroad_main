import "../../globals.css";

export const metadata = {
  title: "Study Abroad Blogs | ViaCerta Abroad Complete Guidance",
  description: "Get complete study abroad services with ViaCerta — career counseling, course selection, university applications, visa processing, and pre-departure guidance. Let’s make it happen!",
  alternates: {
    canonical: "https://viacertaabroad.com/blogs",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
