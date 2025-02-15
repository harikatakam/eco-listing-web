import type { Metadata } from 'next';
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from './components/ClientLayout';

const firaSans = Fira_Sans({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "EcoListing",
  description: "Revolutionizing real estate with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={firaSans.className}>
            <ClientLayout>{children}</ClientLayout>
            </body>
    </html>
  );
}
