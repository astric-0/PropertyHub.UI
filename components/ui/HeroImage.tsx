import React from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";

export function HeroImage() {
  return (
    <div className="hero group h-1/2  bg-[url('/images/hero-image-1.jpg')] bg-cover bg-no-repeat bg-bottom">
      <div className="hero-content w-full h-full">
        {/* <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow text-text-primary" placeholder="Search..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label> */}
      </div>

      {/* <div className="hero-overlay hidden group-hover:block bg-transparent rounded-sm p-3">
        <h1 className="text-5xl font-bold text-text-primary">
          Find Your Dream Property
        </h1>
        <p className="py-6 text-text-primary">
          Discover a wide range of properties for sale or rent. Let us help
          you connect with the right buyer or seller effortlessly.
        </p>
        <button className="btn btn-primary hover:btn-secondary-contrast">Get Started</button>
      </div> */}

    </div>
  );
};

