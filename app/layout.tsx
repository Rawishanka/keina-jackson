'use client'
import { inter } from "./fonts";
import "./globals.css";
import Quots from "./(wedding-ui)/home/quots";



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
