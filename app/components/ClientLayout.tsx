'use client';
import Header from './Header'; 
import Footer from './Footer'; 
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface ClientLayoutProps {
    children: ReactNode;
  }
export default function ClientLayout({ children }:ClientLayoutProps) {
    const pathname = usePathname();
    const isHomepage = pathname === '/';
    return (
        <>
          {!isHomepage && <Header />} {/* Render Header unless it's the homepage */}
          <main className={isHomepage ? '' : 'container mx-auto py-8'}>
            {children}
          </main>
          {!isHomepage && <Footer />} {/* Render Footer unless it's the homepage */}
        </>
      );
}