"use client";
import React from "react";
import Link from "next/link";
const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
const Sidebar = () => {
  return (
    <nav
      className="w-64 bg-white rounded-lg p-5 shadow-md select-none hidden md:block sticky top-20 self-start"
      aria-label="Sidebar Categories"
    >
      <ul className="space-y-5 text-sm font-normal">
        {categories.map((cat) => (
          <li key={cat} className="hover:text-red-500 cursor-pointer">
            <Link href={`/category/${cat.toLowerCase().replace(/ /g, "-")}`}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;






