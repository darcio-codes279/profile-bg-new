import Header from "@/components/Header";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { BentoGridSecondDemo } from "@/components/grid-container";
import { GridContainer } from "@/components/grid-container-copy.tsx";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="flex flex-col items-start p-4 w-full h-screen">
      {/* <div className="z-10 w-full max-w-5xl flex justify-between font-mono text-sm lg:flex h-auto">
        <Header />
      </div> */}

      <div className="flex gap-4 h-full w-full px-10 py-10">
        <BentoGridSecondDemo />
        {/* <GridContainer /> */}
      </div>
    </main >
  );
}
