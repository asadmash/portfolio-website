import Image from "next/image";
import { MeteorsDemo } from "./Meteors-bio";
import { Button } from "./ui/MovingBorders";
import Link from "next/link";

const Aboutme = () => {
  return (
    <section className="about heading pb-20 w-full relative z-10" id="about">
      <span className="absolute left-0 top-0 h-[50vh] right-0">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#33beba"
          fill-opacity="0.6"
         
          d="M0,96L24,128C48,160,96,224,144,250.7C192,277,240,267,288,234.7C336,203,384,149,432,133.3C480,117,528,139,576,170.7C624,203,672,245,720,266.7C768,288,816,288,864,277.3C912,267,960,245,1008,208C1056,171,1104,117,1152,101.3C1200,85,1248,107,1296,144C1344,181,1392,235,1416,261.3L1440,288L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#33beba" fill-opacity="0.6" d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,170.7C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </span>
      <div className="container mt-0 h-full z-10">
        <h1>
          About <span className="text-[#33beba]">Myself</span>
        </h1>
        <div className="flex flex-col md:flex-row py-0 px-5 gap-6 md:gap-10 xl:gap-14 w-full md:h-[80vh] mt-10">
          <Button
            borderRadius="1.75rem"
            className="bg-white z-40 dark:bg-[#db0d0d]  border-neutral-200 dark:border-slate-800"
            duration={10000}
          >
            <aside className="left flex-1 rounded-lg h-full">
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
          <aside className="right flex-1 md:h-[80vh] z-40">
            <MeteorsDemo />
            {/* Show button only on small screens */}
          </aside>
        </div>{" "}
      </div>
      <div className="absolute left-0 bottom-0 w-full " >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#33beba" fill-opacity="0.6"
        className="" d="M0,128L48,106.7C96,85,192,43,288,26.7C384,11,480,21,576,64C672,107,768,181,864,186.7C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#33beba" fill-opacity="0.6" d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,170.7C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </section>
  );
};

export default Aboutme;
