import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partial Prerender test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
        {children}
        <footer className="text-center">
          This demo site uses the TMDB API but is not endorsed or certified by
          TMDB.
        </footer>
      </body>
    </html>
  );
}
