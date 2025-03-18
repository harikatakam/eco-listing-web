"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="space-x-6 hidden md:flex">
      <Link href="/" className={`hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}>Home</Link>
      <Link href="/about" className={`hover:text-primary ${pathname === "/about" ? "text-primary" : ""}`}>About us</Link>
      <Link href="/sellers-tool" className={`hover:text-primary ${pathname === "/sellers-tool" ? "text-primary" : ""}`}>Sellers Tool</Link>
      <Link href="/active-listings" className={`hover:text-primary ${pathname === "/active-listings" ? "text-primary" : ""}`}>Active Listings</Link>
      <Link href="/sold-properties" className={`hover:text-primary ${pathname === "/sold-properties" ? "text-primary" : ""}`}>Sold Listings</Link>
      <Link href="/add-listing" className={`hover:text-primary ${pathname === "/add-listing" ? "text-primary" : ""}`}>Add Listing</Link>
      <Link href="/enquiry" className={`hover:text-primary ${pathname === "/enquiry" ? "text-primary" : ""}`}>Enquiry</Link>
    </nav>
  );
};

export default Navigation;
