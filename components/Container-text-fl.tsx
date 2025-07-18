"use client";
import { ContainerTextFlip } from "@/components/ui/Container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ContainerTextFlipDemo() {
  const words = ["NEXT.JS developer", "REACT.JS developer", "WEB developer", "Programmer",];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-4xl text-center text-xl leading-normal font-nunitoBold tracking-tight text-zinc-700 md:text-4xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline">
        I am Asad, a <span className="inline sm:hidden"><br/></span> <ContainerTextFlip words={words} />
        
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
