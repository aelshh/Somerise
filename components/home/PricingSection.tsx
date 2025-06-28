import { plans } from "@/lib/data";
import React from "react";
import PricingCard from "../PricingCard";

const PricingSection = () => {
  return (
    <section className="relative " id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="uppercase font-bold text-xl mb-8 text-rose-500">
            Pricing
          </h2>
        </div>
        <div className="flex flex-col relative jusitify-center lg:flex-row items-center lg:items-stretch gap-8 d">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
