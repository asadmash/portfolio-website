// "use client";
import { Approch } from "@/components/Approch";
import { Clients } from "@/components/Clients";
import { Experience } from "@/components/Experience";
import { FloatingDockComp } from "@/components/FloatingDockComp";
import { Footer } from "@/components/Footer";
// import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/FoatingNav";
import { RecentsProjects } from "@/components/RecentsProjects";
import { navItems } from "@/data";
// import { FaHome } from "react-icons/fa";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Aboutme from "@/components/Aboutme";

const Home = () => {
  return (
    <main className="relative w-screen bg-[#15181e] flex justify-center items-center flex-col !overflow-hidden font-nunitoBold">
      {/* mx-auto sm:px-10 px-2 */}
      <SpeedInsights />
      <Analytics />
      <Hero />
      <Aboutme />
        <RecentsProjects />
        <Clients />
        <Experience />
        <Approch />
        <Footer />
      <div className="max-w-7xl w-full overflow-hidden">
        <FloatingDockComp />
        {/* <FloatingNav navItems={navItems}/> */}

        {/* <Grid/> */}
      </div>

     <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f4ae8d3099c14b98a8a0e342f67be9d6"}'/>
    </main>
  );
};

export default Home;
