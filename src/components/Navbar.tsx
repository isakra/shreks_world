import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 text-2xl bg-green-700 text-white">
      <h2 className="font-extrabold text-3xl">Shreks World</h2>
      <ul className="flex gap-4">
        <Link href="/" className="transition hover:text-green-200">
          Home
        </Link>
        <Link href="/characters" className="transition hover:text-green-200">
          Characters
        </Link>
        <Link href="/location" className="transition hover:text-green-200">
          Location
        </Link>
        <Link href="/about" className="transition hover:text-green-200">
          About
        </Link>
        <Link href="/search" className="transition hover:text-green-200">
          Search
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
