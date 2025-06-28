import { BrainCircuit, FileOutput, FileText, FileTextIcon } from "lucide-react";
import React from "react";

type stepsType = {
  icon: React.ReactNode;
  label: string;
  description: string;
};

export const steps: stepsType[] = [
  {
    icon: React.createElement(FileText, { size: 64, strokeWidth: 1.5 }),
    label: "Upload Your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    icon: React.createElement(BrainCircuit, { size: 64, strokeWidth: 1.5 }),
    label: "Al Analysis",
    description:
      "Our advanced Al processes and analyzes your document instantly",
  },
  {
    icon: React.createElement(FileOutput, { size: 64, strokeWidth: 1.5 }),
    label: "Get Summary",
    description: "Receive a clear, concise summary of your document",
  },
] as const;

export const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 1,
    description: "Perfect for ocassional use",
    items: [
      "5 PDFs summaries per month",
      "Standard processing speed",
      "Email Support",
    ],
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 10,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "",
    priceId: "",
  },
] as const;
