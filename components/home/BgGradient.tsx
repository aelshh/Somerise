import { cn } from "@/lib/utils";
import React from "react";

const BgGradient = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute top-20 -left-10 w-50 h-50 sm:w-100 sm:h-100 lg:w-180 lg:h-120  bg-rose-100 rounded-full bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-10 blur-[150px]  ",
        className
      )}
    ></div>
  );
};

export default BgGradient;
