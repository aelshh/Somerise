import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col z-0 justify-center items-center relative mx-auto py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 mx-w-7xl">
      <div className="flex ">
        <div className="relative p-[1px]  bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 rounded-full overflow-hidden animate-gradient-x  group">
          <Badge
            variant="secondary"
            className="relative px-6 py-2 bg-white rounded-full text-base  group-hover:bg-rose-100 transition-colors font-medium duration-200"
          >
            <Sparkles className="text-rose-600 h-6 w-6 animate-pulse mr-2" />
            <span className="text-base text-rose-600">Powered by AI</span>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold py-6 text-center">
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 transform -rotate-2 bg-rose-200/50 -skew-y-1 "
            aria-hidden={true}
          ></span>
        </span>{" "}
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl px-4 lg:px-0 lg:max-w-400 text-gray-600 text-center">
        Get a beautiful summary reel of the document in seconds
      </h2>
      <Button
        className="rounded-full text-white text-base mt-6 sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 transition-all hover:no-underline duartion-300 font-bold shadow-lg"
        variant="link"
      >
        <Link className="flex gap-2 items-center" href="#pricing">
          <span>Try Somerise</span>
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
};

export default HeroSection;
