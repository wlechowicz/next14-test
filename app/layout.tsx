import { GeistSans } from "geist/font";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="text-slate-200">{children}</body>
    </html>
  );
}
