import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Repo Swap — one click from any GitHub repo to the right tool",
  description:
    "A tiny, no-tracking browser extension. Swap any GitHub repo URL into GitIngest, GitMCP, GitDiagram, DeepWiki, GitHub.gg, StackBlitz, or Star History — in one click.",
  openGraph: {
    title: "Repo Swap",
    description:
      "Change one word in a GitHub URL → unlock the right tool. One click, no tracking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", archivoBlack.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
