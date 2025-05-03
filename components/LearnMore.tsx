import Link from "next/link";
import React from "react";

export default function LearnMore() {
  return (
    <Link
      href={
        "https://medium.com/@rashad.aldridge1230/rashad-aldridge-is-a-bbq-enthusiast-with-deep-roots-in-north-carolina-and-a-passion-for-bringing-cf4037839a47"
      }
      target="_blank"
    >
      <button className="btn btn-outline group">
        <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
          Learn more
        </span>
        <span className="absolute inset-0 bg-[#93C2E4] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
      </button>
    </Link>
  );
}
