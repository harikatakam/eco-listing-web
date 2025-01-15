/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-page-custom-font */

'use client';

import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Load Bootstrap CSS
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "EcoListing",
//   description: "EcoListing",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <title>Ecolisting</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
