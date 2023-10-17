import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 p-4 lg:px-20 xl:first-letter:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
