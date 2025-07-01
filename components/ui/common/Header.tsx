import { FileText } from "lucide-react";

import React from "react";
import { Button } from "../button";
import NavLink from "./NavLink";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="container flex justify-between bg-transparent items-center py-4 px-2 z-10  lg:px-8 mx">
      <div className=" flex bg-transparent lg:flex-1">
        <NavLink
          href="/"
          className="flex gap-1 group item-center  bg-transparentjustify-center lg:gap-2 shrink-0"
        >
          <FileText className="w-5 text-gray-900 h-5 lg:w-8 lg:h-8 group-hover:rotate-12 transition-all ease-in-out duration-200 transform" />
          <div className="font-extrabold text-gray-900 lg:text-xl">
            Somerise
          </div>
        </NavLink>
      </div>
      <div className="flex gap-4 lg:gap-12 lg:justify-center lg:items-center">
        <NavLink href="/#pricing"> Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard"> Your Summaries</NavLink>
        </SignedIn>
      </div>
      <div className="lg:flex-1 flex justify-end">
        <SignedIn>
          <div className="flex gap-2 items-center justify-center">
            <NavLink href="/upload"> Upload a PDF</NavLink>
            <div> Pro</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>
        <SignedOut>
          <NavLink href="/sign-up"> Sign Up</NavLink>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Header;
