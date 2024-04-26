'use client'
import { inter } from "./fonts";
import "./globals.css";
import Quots from "./(wedding-ui)/home/quots";
import { useEffect, useState } from "react";
import { getAudioInstance } from "./lib/utils";
import Router from "next/router";



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
