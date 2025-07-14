// "use client";
import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

export const Experience = () => {
  return (
    <section className="py-20 z-10 relative w-screen" id="experiences">
       <span className="absolute -z-10 left-0 top-0  w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#7459DC" fill-opacity="1" d="M0,224L120,240C240,256,480,288,720,288C960,288,1200,256,1320,240L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </span>
      <div className="container">
        <h1 className="heading">
        My
        <span className="text-[#f05a7e]"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 bg-[#1b1f27]"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 bg-[#1b1f27]">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                width={16}
                height={20}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      </div>
      <span className="absolute -z-10 left-0 bottom-0  w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F05A7E" fill-opacity="1" d="M0,224L120,240C240,256,480,288,720,288C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </span>
    </section>
  );
};

// export default Experience
