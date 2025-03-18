import Image from 'next/image';
import Link from 'next/link';
import Navigation from "./Navigation";

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
        <Navigation />
        <Link href="/login" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Login</Link>
      </div>
    </header>
  );
}
