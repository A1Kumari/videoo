"use client";
import Link from 'next/link';

const Navbar2 = () => {
  return (
    <nav className="bg-white py-2 px-4 fixed w-full z-10 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
        <div>
            <Link href="/" className="text-gray-700 font-semibold text-lg">
                Home
            </Link>
            <Link href="/about" className="ml-4 text-gray-700 hover:text-gray-900">
                About
            </Link>
            {/* Add more navigation links as needed */}
        </div>
        <div className="hidden md:block">
            {/* Add additional elements for the secondary navbar */}
        </div>
    </div>
</nav>
  );
};

export default Navbar2;