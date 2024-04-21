import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Quots from "./(wedding-ui)/home/quots";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "This is a wedding invitation website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Quots/>
      </body>
    </html>
  );
}
