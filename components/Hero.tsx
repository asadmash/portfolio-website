// "use client";
import React from "react";
// import { Spotlight } from "./ui/Spotlight";


// const TextGenerateEffect = dynamic(() => import('@/components/ui/TextGenerateEffect'), {
//   ssr: false, // forces client-side loading
// });



import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import {BackgroundBeamsWithCollision} from "./ui/Background-beams-with-collision";
import { ContainerTextFlipDemo } from "./Container-text-fl";
import { FloatingDockComp } from "./FloatingDockComp";
import dynamic from "next/dynamic";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Hero = () => {
  return (
    <>
      {/* <div className="pb-20 pt-36">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[80vw]" fill="blue" />
      </div> */}
       <section className="h-screen w-full flex items-center justify-center" id="hero" >
       <header className="relative h-full">
         <FloatingDockComp/>
       </header>
     <BackgroundBeamsWithCollision className="h-screen w-full">
        {/* grid background */}
       
          {/* heading text */}
         <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic web magic with next.js
            </h2>
            {/* <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless User Experiences"
            /> */}
            <div className="max-h-[28] h-24 w-screen flex items-center justify-center">

              <ContainerTextFlipDemo/>
            </div>
            
            {/* magic button */}
            <a href="#projects" className="">
              <MagicButton
                title="Show Your Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
     </BackgroundBeamsWithCollision>
      </section>
    </>
  );
};

// export default Hero;
