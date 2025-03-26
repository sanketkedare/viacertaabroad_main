import "../../globals.css";

export const metadata = {
  title: "IELTS, TOEFL & GRE Prep Guides",
  description: "Ace IELTS, TOEFL, GRE, and GMAT with trusted study abroad exam prep guides, practice tests, and top study resources. Studying abroad is made simple!",
  alternates: {
    canonical: "https://viacertaabroad.com/test-prep",
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
