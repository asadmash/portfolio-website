
import Image from "next/image";
import { MeteorsDemo } from "./Meteors-bio";


const Aboutme = () => {


  return (
    <section className="about heading mt-5 mb-5 relative">
      <h1>
        About <span className="text-[#33beba]">Myself</span>
      </h1>
      <div className="flex flex-col md:flex-row py-0 px-5 gap-6 md:gap-10 xl:gap-14 w-full md:h-[80vh] mt-10">
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
        <aside className="right flex-1 md:h-[80vh]">
         <MeteorsDemo />
          {/* Show button only on small screens */}
        </aside>
      </div>{" "}
    </section>
  );
};

export default Aboutme;
