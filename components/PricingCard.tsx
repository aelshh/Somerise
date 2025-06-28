import { plans } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type PricingCardProps = (typeof plans)[number];

const PricingCard = ({
  name,
  id,
  description,
  paymentLink,
  items,
  price,
}: PricingCardProps) => {
  return (
    <div className="relative w-full min-h-full max-w-lg">
      <div
        className={cn(
          "relative w-full max-w-lg h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl hover:scale-105 transition-all duration-300",
          id === "pro" && "border-rose-500 gap-5 border-2 "
        )}
      >
        <div className="relative flex h-full gap-4 justify-between flex-col ">
          <div className="flex justify-between items-center gap-4">
            <div className="mb-5">
              <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
              <p className="text-base-content/80 mt-2">{description}</p>
            </div>
          </div>
          <div className="flex gap-2 mb-5">
            <p className="text-5xl uppercase font-semibold">${price}</p>
            <div className="flex flex-col justify-end mb-[4px]">
              <p className="text-xs uppercase font-semibold ">USD</p>
              <p className="text-xs  ">/month</p>
            </div>
          </div>
          <div className="space-y-2.5 leading-relaxed mb-5 text-base flex-1">
            {items.map((item, index) => (
              <li className="flex items-center gap-2" key={index}>
                <CheckIcon size={18} />
                <span>{item}</span>
              </li>
            ))}
          </div>
          <div className="flex justify-center w-full mt-auto  space-y-2 ">
            <Link
              href="paymentLink"
              className={cn(
                "rounded-full flex items-center gap-2 justify-center w-full text-center p-2 bg-linear-to-r from-rose-800 to-rose-500 text-white hover:from-rose-500 hover:to-rose-800 border-2",
                id === "pro"
                  ? "border-rose-900"
                  : "border-rose-100 from-rose-400 to-rose-500"
              )}
            >
              Buy Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
