"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function NewsCard({ news, isFirst }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isFirst ? "md:col-span-2 md:row-span-1 h-64 md:h-96" : "h-auto"
      } ${
        inView
          ? "opacity-100 transform-none"
          : "opacity-0 transform translate-y-10"
      }`}
      style={{ transition: "opacity 0.5s, transform 0.5s" }}
    >
      <div className="relative w-full h-32 md:h-40">
        <Image
          src={news.imageurl}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 hover:text-blue-500">
          {news.title}
        </h2>
        <p className="mb-4 text-gray-700">
          {news.body.length > 150
            ? `${news.body.substring(0, 150)}...`
            : news.body}
        </p>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:underline"
        >
          Read full article
        </a>
      </div>
    </div>
  );
}
