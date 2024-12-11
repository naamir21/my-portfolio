"use client";

import { useState } from "react";

export default function ProjectList({ title, description, languages }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-yellow-600 via-orange-600 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-md mb-4"
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

      {/* Description */}
      {isOpen && (
        <div className="text-gray-300">
          <p className="mb-2">{description}</p>
          <p className="text-sm text-purple-400">
            <strong>Languages:</strong> {languages.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
