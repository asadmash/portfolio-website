// "use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <section className="py-20 mt-0 relative w-screen z-10" id="reviews">
      <span className="absolute -z-10 left-0 top-0  w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5B17B" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,69.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </span>
      <div className="container">
        <h1 className="heading mb-10">
        Kind words from
        <span className="text-[#33beba] "> satisfiend clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Infinity moving card component */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
       
        />
        {/* companies */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div> */}
      </div>
      </div>
      <span className="absolute -z-10 left-0 bottom-0  w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7459DC" fill-opacity="1" d="M0,320L120,293.3C240,267,480,213,720,208C960,203,1200,245,1320,266.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </span>
    </section>
  );
};

// export default Clients;
