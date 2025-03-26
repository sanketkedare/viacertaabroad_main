import "../../globals.css";

export const metadata = {
  title: "Best Countries to Study Abroad in 2025",
  description: "Looking to study abroad? Find popular study destinations with top universities and affordable living costs for global learning.",
  alternates: {
    canonical: "https://viacertaabroad.com/destinations",
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
