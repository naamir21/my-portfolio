'use client';

import { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import ImageGrid from "./ImageGrid";

export default function Design() {
  const [selectedCategory, setSelectedCategory] = useState("megabyte");

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 relative">
      {/* Back Arrow */}
      <Link href="/" className="absolute top-4 left-4 text-white hover:text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 via-orange-500 to-purple-700 bg-clip-text text-transparent">
        MY DESIGNS & UX WORK
      </h1>
      {/* Dropdown to select category */}
      <Dropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* Display images based on selected category */}
      <ImageGrid category={selectedCategory} />
    </div>
  );
}
