import React from "react";
import BgGradient from "./BgGradient";
import { Pizza } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="relative ">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="text-center flex flex-col items-center space-y-4 ">
          <div className="bg-gray-200/20 border inline-flex items-center justify-center backdrop-blur-xs mb-4 border-gray-500/20 rounded-2xl p-2">
            <Pizza className="h-6 w-6 text-rose-600" />
          </div>
          <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
              Watch how Somerise transforms{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent ">
                this Next.js course PDF{" "}
              </span>{" "}
              into an easy-to-read summary!
            </h3>
          </div>
          <div className="flex justify-center items-center px-2 md:px-4 lg:px-6">
            {/* Summarry  viewer Todo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
