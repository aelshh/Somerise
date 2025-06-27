import { FileText } from "lucide-react";

import React from "react";
import { Button } from "../button";
import NavLink from "./NavLink";

const Header = () => {
  const isSignedIn = false;
  return (
    <nav className="container flex justify-between items-center py-4 px-2 lg:px-8 mx">
      <div className=" flex lg:flex-1">
        <NavLink
          href="/"
          className="flex gap-1 group item-center justify-center lg:gap-2 shrink-0"
        >
          <FileText className="w-5 text-gray-900 h-5 lg:w-8 lg:h-8 group-hover:rotate-12 transition-all ease-in-out duration-200 transform" />
          <div className="font-extrabold text-gray-900 lg:text-xl">
            Somerise
          </div>
        </NavLink>
      </div>
      <div className="flex gap-4 lg:gap-12 lg:justify-center lg:items-center">
        <NavLink href="/#pricing"> Pricing</NavLink>
        {isSignedIn && <NavLink href="/dashboard"> Your Summaries</NavLink>}
      </div>
      <div className="lg:flex-1 flex justify-end">
        {isSignedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/"> Upload a PDF</NavLink>
            <div> Pro</div>
            <Button>Sign Out</Button>
          </div>
        ) : (
          <NavLink href="/signup"> Sign Up</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
