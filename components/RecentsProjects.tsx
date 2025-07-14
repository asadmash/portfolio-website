// 'use client'
import { projects } from "@/data";
import React from "react";
// import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { BackgroundGradient } from "./ui/Background-gradient";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export const RecentsProjects = () => {
  return (
    <section className="pt-20 h-full w-screen relative z-10" id="projects">
      <span className="absolute left-0 -top-2 h-[50vh] w-full -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-full"
        >
          <path
            fill="#FE7743"
            fill-opacity="1"
            d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,170.7C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </span>
      <div className="container my-60 h-full w-full">
        <p className="heading !text-3xl md:!text-4xl lg:!text-5xl">
          A small collection of{" "}
          <span className="text-[#3d74b6]">recent projects</span>
        </p>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-6 gap-y-6 mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <>
              <Link href={link}>
                <CardContainer
                  key={id}
                  className="inter-var gap-16 flex items-center justify-center sm:w-[570px] w-[80vw]"
                >
                  <CardBody
                    className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#1b1f27] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
                    rotateX={20}
                  >
                    <CardItem
                      translateZ="100"
                      className="w-full mt-4"
                      rotateX={350}
                      // rotateZ={}
                    >
                      <Image
                        src={img}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="h-60 lg:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white lg:text-2xl md:text-xl line-clamp-1 mt-2"
                    >
                      {title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 lg:text-lg lg:font-normal font-light line-clamp-2"
                    >
                      {des}
                    </CardItem>

                    <div className="flex justify-between items-center mt-5">
                      <CardItem
                        translateZ={20}
                        as="a"
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-0 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
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
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 flex py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Check Live Site{" "}
                        <FaLocationArrow className="ms-3" color="#000" />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </Link>
            </>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F5B17B"
            fill-opacity="1"
            d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,69.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </span>
    </section>
  );
};

// export default RecentsProjects;
