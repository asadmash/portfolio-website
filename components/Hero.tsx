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
       <section className="h-screen min-w-8xl w-full flex items-center justify-center" id="home">
       <header className="relative h-full">
         <FloatingDockComp/>
       </header>
     <BackgroundBeamsWithCollision className="h-screen w-full">
        {/* grid background */}
       
          {/* heading text */}
         <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[95vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic web magic with next.js
            </h2>
            {/* <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless User Experiences"
            /> */}
            <h1 className="text-center text-2xl font-bold md:text-3xl xl:text-6xl my-6 xl:my-10 tracking-wide leading-snug [word-spacing:-0.3em]  font-jetbrains">Transforming Concepts into Seamless <br /><span className="text-[#ffe868]">User Experiences</span></h1>
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
         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute left-0 bottom-0"><path fill="#33beba" fill-opacity="1" d="M0,32L40,32C80,32,160,32,240,69.3C320,107,400,181,480,197.3C560,213,640,171,720,133.3C800,96,880,64,960,74.7C1040,85,1120,139,1200,144C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
      </section>
    </>
  );
};

// export default Hero;
