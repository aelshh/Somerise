import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Somerise AI – Advanced PDF Summarizer Tool | Fast, Accurate AI Summaries",
  description:
    "Somerise AI transforms lengthy PDFs into concise summaries in seconds! Perfect for researchers, students & professionals. Premium AI-powered accuracy—try it today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
