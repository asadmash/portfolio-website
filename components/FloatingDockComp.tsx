'use client';
import React, { useEffect, useRef, useState } from "react";
import { FloatingDock } from "@/components/ui/Floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconFileCv,
  IconHome,
  IconBrandPnpm,
  IconUserSearch,
  IconCircuitCellPlus
} from "@tabler/icons-react";

export function FloatingDockComp() {

   const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      // When hero is still partially in view
      if (rect.bottom > window.innerHeight * 0.05) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    handleScroll(); // run on load to avoid initial jump

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <IconUserSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandPnpm className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Testimonials",
      icon: (
        <IconCircuitCellPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div  className={`z-[5000] w-full flex items-center justify-center transition-all duration-300 ${
        isFixed
          ? "fixed top-[6%] left-0"
          : "absolute bottom-[2%] left-0"
      }`}>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
