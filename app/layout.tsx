import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} text-slate-200`}>
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
