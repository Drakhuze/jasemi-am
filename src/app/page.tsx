"use client"

import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ThemeToggle />
        <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          {theme === "light" && "Kamu lebih terang dibandingkan silaunya layar ini. KOK KAMU BISA CANTIK BANGET CIH >:3"}
          {theme === "dark" && "Kamu di kegelapan ini menerangi hidup ku. LAV YAW GENDOT"}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linktr.ee/jasemiid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Jasemi Link Tree
        </a>
      </footer>
    </div>
  );
}
