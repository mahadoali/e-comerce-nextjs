"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-200 overflow-x-hidden">
      <div className="bg-black text-white py-1 text-xs">
        <div className="container mx-auto flex justify-between items-center px-4 overflow-x-auto">
          <span className="whitespace-nowrap text-center flex-1 truncate pr-3">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="font-bold underline ml-1 cursor-pointer">ShopNow</span>
          </span>
          <div className="hidden sm:flex items-center gap-1 sm:gap-2 ml-4 flex-shrink-0">
            <span>English</span>
            <ChevronDownIcon className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <button
          className="md:hidden hover:text-red-500 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
        <span className="text-lg sm:text-2xl xl:text-3xl font-bold ml-10 md:ml-16 lg:ml-20 transition-all">
          Exclusive
        </span>
        <nav className="hidden md:flex flex-grow justify-center gap-6 text-base xl:text-lg">
          <Link href="/home" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors">
            Contact
          </Link>
          <Link href="/about" className="hover:text-red-500 transition-colors">
            About
          </Link>
          <Link href="/signup" className="hover:text-red-500 transition-colors">
            Sign Up
          </Link>
        </nav>
        <div className="flex items-center gap-3 xl:gap-5">
          <div className="relative hidden md:block w-[140px] lg:w-[200px] xl:w-[260px] 2xl:w-[320px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-8 pr-3 py-1.5 lg:py-2 rounded-md border border-gray-300 text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-black"
            />
            <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 xl:h-5 xl:w-5 text-gray-400" />
          </div>
          <button className="hover:text-red-500 transition-colors" aria-label="Shopping Cart">
            <ShoppingCartIcon className="h-6 w-6 xl:h-7 xl:w-7" />
          </button>
          <button className="hover:text-red-500 transition-colors" aria-label="Love">
            <HeartIcon className="h-6 w-6 xl:h-7 xl:w-7" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-3 text-sm">
          <Link href="/home" className="block hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/contact" className="block hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/about" className="block hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/signup" className="block hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
