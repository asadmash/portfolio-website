// 'use client'
import { projects } from "@/data";
import React from "react";
// import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { BackgroundGradient } from "./ui/Background-gradient";
import Image from "next/image";

export const RecentsProjects = () => {
  return (
    <section className="pt-20 mb-0 h-full w-screen relative z-10" id="projects">
      <span className="absolute left-0 -top-2 h-[50vh] w-full -z-10">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full">
          <path
            fill="#FE7743"
            fill-opacity="1"
            d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,170.7C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </span>
      <div className="container mt-0 h-full w-full">
        <p className="heading !text-3xl md:!text-4xl lg:!text-5xl">
          A small collection of{" "}
          <span className="text-[#3d74b6]">recent projects</span>
        </p>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className=" sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <Link href={link}>
                {/* <PinContainer title={link} href={link}> */}
                <BackgroundGradient className="rounded-[18px] p-4 bg-white dark:bg-[#1c2129] ">
                  <div className="relative flex items-center justify-center  sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#1b1f2775]">
                      <Image
                        src="/bg.png"
                        alt="bg-img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <Image
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-2 w-[320px] h-[230px] sm:w-[400px] sm:h-[280px] md:w-[420px] md:h-[280] lg:w-[465px] lg:h-[302px] rounded-t-lg bottom-r-20 transform rotate-3"
                      width={320}
                      height={320}
                    />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                    {des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-back lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt={icon}
                            className="p-2"
                            width={100}
                            height={100}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </BackgroundGradient>
                {/* </PinContainer> */}
              </Link>
            </div>
          ))}

          {/* show more projects */}
          <Link href="/works">
            <MagicButton
              title="View all projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
        <span className="absolute left-0 -bottom-1 w-full -z-10">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5B17B" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,69.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </span>
    </section>
  );
};

// export default RecentsProjects;
