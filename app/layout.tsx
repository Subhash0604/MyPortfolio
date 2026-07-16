import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Scene from "@/components/Scene";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Subhash Peddireddy — Full Stack Developer",
  description:
    "Frontend-focused Full Stack Developer specializing in React.js, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {    
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        <div className="ambient" />
        <Scene/>
        <div className="grain" />
        <div className="relative z-[2] flex min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-[250px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
