
import Image from "next/image";
import { MeteorsDemo } from "./Meteors-bio";
import { Button } from "./ui/MovingBorders";
import Link from "next/link";

const Aboutme = () => {


  return (
    
    <section className="about heading mt-5 mb-5 relative" id="about">
      <h1>
        About <span className="text-[#33beba]">Myself</span>
      </h1>
      <div className="flex flex-col md:flex-row py-0 px-5 gap-6 md:gap-10 xl:gap-14 w-full md:h-[80vh] mt-10">
        <Button borderRadius="1.75rem"
        className="bg-white dark:bg-[#db0d0d]  border-neutral-200 dark:border-slate-800"
        duration = {10000} 
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
        <aside className="right flex-1 md:h-[80vh]">
         <MeteorsDemo />
          {/* Show button only on small screens */}
        </aside>
      </div>{" "}
    </section>

  );
};

export default Aboutme;
