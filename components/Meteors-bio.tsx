"use client";
import React from "react";
import { Meteors } from "./ui/Meteors";
import{ useState } from "react";

export function MeteorsDemo() {
      // bio text expend or not expend
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="max-h-full h-full">
      <div className="relative w-full max-w-xl h-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-[#1b1f27] px-4 py-8 shadow-xl">


           <p
            className={`text-[18px] xl:text-[20px]  h-full justify-center text-justify leading-tight text-[#fff] font-semibold sm:p-4`}
          >
            <span className={`${
              expanded
                ? ""
                : "line-clamp-[14] md:line-clamp-[20] lg:line-clamp-none"
            } transition-all`}>
              I’m a self-taught Front-End Web Developer with a Diploma in
            Engineering and a strong background in HTML, CSS, JavaScript,
            React.js, Next.js, and Tailwind CSS. <br />What started as a personal
            curiosity quickly turned into a daily practice of learning,
            building, and refining real-world web applications. <br />Over the past
            few years, I’ve focused on mastering modern front-end technologies
            by working on hands-on projects—from responsive landing pages to
            dynamic, component-based apps. My approach has always been
            practical: learn something new, apply it immediately, and iterate
            until it works well and looks clean. <br />I enjoy turning complex UI
            designs into functional, responsive experiences and writing code
            that’s maintainable and purposeful. Along the way, I’ve developed a
            strong sense of ownership, attention to detail, and the ability to
            work independently and adapt quickly—skills that I know are valuable
            in professional, fast-moving environments. <br />I’m currently looking to
            join a team where I can build real products, grow with experienced
            developers, and contribute to meaningful work that reaches users and
            makes an impact.
            </span>
            <span
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 hover:underline lg:hidden inline text-[18px]"
            >
              {expanded ? " Show less" : " Read more"}
            </span>
          </p>


          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
