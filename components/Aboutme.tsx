"use client";
import Image from "next/image";
import React, { useState } from "react";

const Aboutme = () => {
  // bio text expend or not expend
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="about heading mt-5">
      <h1>
        About <span className="text-[#33beba]">Myself</span>
      </h1>
      <div className="flex flex-col md:flex-row py-10 px-5 gap-6">
        <aside className="left flex-1 rounded-lg ">
          <Image
            src="/myImg2.jpg"
            alt="profile"
            width={600}
            height={1000}
            className="overflow-hidden rounded-xl"
          />
        </aside>
        <aside className="right flex-1">
          <p
            className={`text-[18px] text-justify leading-tight text-white-100 font-semibold`}
          >
            <span className={`${
              expanded
                ? ""
                : "line-clamp-[14] md:line-clamp-[20] lg:line-clamp-[24]"
            } transition-all`}>
              I’m a self-taught Front-End Web Developer with a Diploma in
            Engineering and a strong background in HTML, CSS, JavaScript,
            React.js, Next.js, and Tailwind CSS. What started as a personal
            curiosity quickly turned into a daily practice of learning,
            building, and refining real-world web applications. Over the past
            few years, I’ve focused on mastering modern front-end technologies
            by working on hands-on projects—from responsive landing pages to
            dynamic, component-based apps. My approach has always been
            practical: learn something new, apply it immediately, and iterate
            until it works well and looks clean. I enjoy turning complex UI
            designs into functional, responsive experiences and writing code
            that’s maintainable and purposeful. Along the way, I’ve developed a
            strong sense of ownership, attention to detail, and the ability to
            work independently and adapt quickly—skills that I know are valuable
            in professional, fast-moving environments. I’m currently looking to
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

          {/* Show button only on small screens */}
        </aside>
      </div>{" "}
    </section>
  );
};

export default Aboutme;
