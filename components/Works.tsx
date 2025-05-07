// all the data of selected projects
import { allProjects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Image from "next/image";

// Write the functional component
const Works = () => {
  // return the ui
  return (
    <div className="py-20" id="works">
      <h1 className="heading">
        A sophisticated collection of{" "}
        <span className="text-purple">my projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p4 gap-x-24 gap-y-8 mt-10">
        {allProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-2 w-[320px] h-[230px] sm:w-[400px] sm:h-[280px]" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
