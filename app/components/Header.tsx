import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <div>
        <Image
        src="/images/logo.svg"
        alt="Eco Listing Logo"
        width={180}
        height={100}
      />
        </div>
        <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href="/about" className="hover:text-primary">About us</Link>
        <Link href="/sellers-tool" className="hover:text-primary">Sellers Tool</Link>
        <Link href="/sold-properties" className="hover:text-primary">Sold Properties</Link>
        <Link href="/add-listing" className="hover:text-primary">Add Listing</Link>
        <Link href="/enquiry" className="hover:text-primary">Enquiry</Link>
        </nav>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Login</button>
      </div>
    </header>
  );
}
