import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

const UploadHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <div className="p-[1px] bg-linear-to-r rounded-full via-rose-500 from-rose-200 to-rose-800 overflow-hidden animate-gradient-x group">
        <Badge
          variant="secondary"
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-rose-100 transition-colors"
        >
          <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
          <span className="text-base">AI-Powered content creation</span>
        </Badge>
      </div>
      <h1 className="font-bold py-6 text-center">
        Start Uploading
        <span className="relative ml-1 inline-block">
          <span className="relative z-10 px-2 ">Your PDF's</span>
          <span
            className="absolute inset-0 transform -rotate-2 bg-rose-200/50 rounded-lg -skew-y-1 "
            aria-hidden={true}
          ></span>
        </span>{" "}
      </h1>
      <div>
        <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
          Upload your PDF and let our AI do the magic! ✨
        </p>
      </div>
    </div>
  );
};

export default UploadHeader;
