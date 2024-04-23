'use client'
import { inter } from "./fonts";
import "./globals.css";
import Quots from "./(wedding-ui)/home/quots";
import { useEffect } from "react";
import { getAudioInstance } from "./lib/utils";
import Router from "next/router";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const audio = getAudioInstance();
    audio.play();

    const handleRouteChange = () => {
      audio.pause();
    };

    Router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      audio.pause();
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Quots/>
      </body>
    </html>
  );
}
