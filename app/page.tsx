"use client";
import Approch from "@/components/Approch";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
// import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FoatingNav";
import RecentsProjects from "@/components/ui/RecentsProjects";
import { navItems } from "@/data";
// import { FaHome } from "react-icons/fa";


const Home = () => {
  return (
    <main className="relative bg-[#15181e] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
      {/* <Grid/> */}
      <RecentsProjects/>
      <Clients/>
      <Experience/>
      <Approch/>
      <Footer/>
      </div>
    </main>
  );
}

export default Home;