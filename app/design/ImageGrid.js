"use client";

import designImages from "./designImages";

export default function ImageGrid({ category }) {
  const images = designImages[category] || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((imgSrc, index) => (
        <div key={index} className="w-full overflow-hidden rounded-lg">
          <img
            src={imgSrc}
            alt={`${category} design ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
