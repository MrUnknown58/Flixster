import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
        <div className="pointer-events-none absolute inset-0 z-20 size-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Tailwind is Awesome
        </h1>
        <p className="relative z-20 mt-2 text-center text-neutral-300">
          Framer motion is the best animation library ngl
        </p>
      </div>
    </>
  );
}
