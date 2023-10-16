import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-10 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* LOGO  */}
      <div className="text-xl">
        <Link href="/">Massimo</Link>
      </div>
      {/* MOBILE MENU */}
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
