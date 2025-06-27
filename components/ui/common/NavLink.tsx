"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const pathName = usePathname();
  const isActive = pathName === href || pathName.startsWith(href);
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-600 hover:text-rose-600 transition-colors duration-200 text-sm",
        className,
        isActive ? "text-rose-600" : ""
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
