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
  IconCircuitCellPlus,
  IconBrandLinkedin,
  IconMail
} from "@tabler/icons-react";

export function FloatingDockComp() {

  //  const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const hero = document.getElementById("hero");
  //     if (!hero) return;

  //     const rect = hero.getBoundingClientRect();

  //     // When hero is still partially in view
  //     if (rect.bottom > window.innerHeight * 0.05) {
  //       setIsFixed(false);
  //     } else {
  //       setIsFixed(true);
  //     }
  //   };

  //   handleScroll(); // run on load to avoid initial jump

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About",
      icon: (
        <IconUserSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandPnpm className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Testimonials",
      icon: (
        <IconCircuitCellPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#reviews",
    },
    {
      title: "Experiences",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experiences",
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
      href: "https://github.com/asadmash",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Gmail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div  className={` w-full flex items-center justify-center transition-all duration-300 fixed bottom-[5px] left-0 z-50`}>
      <FloatingDock
        mobileClassName="translate-y-0" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
