import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Fooflix",
  description: "Get flixed, foo!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="text-slate-200">
        <Header />
        {children}
        <footer className="text-center">
          This demo site uses the TMDB API but is not endorsed or certified by
          TMDB.
        </footer>
      </body>
    </html>
  );
}
