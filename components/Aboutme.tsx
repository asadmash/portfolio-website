import Image from "next/image";
import { MeteorsDemo } from "./Meteors-bio";
import { Button } from "./ui/MovingBorders";
import Link from "next/link";

const Aboutme = () => {
  return (
    <section className="about heading pb-20 w-full relative z-10" id="about">
      <span className="absolute left-0 -top-1 h-[50vh] -z-10 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3D74B6" fill-opacity="1" d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,170.7C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </span>
      <div className="container mt-0 h-full font-nunitoRegular font-light">
        <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-nunitoBold font-bold">
          About <span className="text-[#fe7743]">Myself</span>
        </h1>
        <div className="flex flex-col md:flex-row py-0 px-5 gap-6 md:gap-15 xl:gap-20 w-full justify-between md:h-[80vh] mt-10">
          <Button
            borderRadius="1.75rem"
            className="bg-white z-40 dark:bg-[#db0d0d]  border-neutral-200 dark:border-slate-800 md:max-w-[40vw]"
            duration={10000}
          >
            <aside className="left flex-1 rounded-lg h-full w-full md:max-w-[40vw]">
              <Image
                src="/myImg2.jpg"
                alt="profile"
                width={800}
                height={800}
                objectFit="cover"
                className="overflow-hidden rounded-xl w-full h-full object-cover"
              />
            </aside>
          </Button>
          <aside className="right flex-1 md:h-[80vh] z-40 md:self-end">
            <MeteorsDemo />
            {/* Show button only on small screens */}
          </aside>
        </div>{" "}
      </div>
      <span className="absolute left-0 bottom-0 w-full " >
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FE7743" fill-opacity="1" d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,170.7C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </span>
    </section>
  );
};

export default Aboutme;
