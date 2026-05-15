import { useEffect, useState } from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";
import EarthContainer from "@/components/EarthContainer";
import UpArrow from "./../public/assets/icons/up-arrow.svg";
import Services from "@/components/Services";

function App({ loading }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <main className="relative z-0 w-full h-full">
      {/* Sticky wrapper for Hero to create PowerPoint-like slide-over transition */}
      <div className="sticky top-0 w-full h-screen -z-10">
        <Navbar />
        <Hero loading={loading} isMobile={isMobile} />
      </div>
      
      {/* Subsequent sections have relative positioning and z-10 to scroll OVER the sticky Hero */}
      <div className="w-full bg-white relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <About />
        <Services />
        <Experience />
        <Tech />
        <Works />
        {/* Contact — same white container, no gap/break */}
        <div className="relative flex md:flex-row justify-between flex-col-reverse w-full h-full sm:px-8 sm:py-4 px-2 pb-8">
          <Contact />
          <EarthContainer isMobile={isMobile} />
          <StarsCanvas />
        </div>
      </div>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="fixed md:w-10 md:h-10 h-8 w-8 p-2 bottom-8 md:right-10 right-8 text-center text-secondary backdrop-filter backdrop-blur-xl bg-opacity-20 bg-tertiary rounded-lg hover:scale-110 transition-all duration-300"
      >
        <UpArrow />
      </button>
    </main>
  );
}

export default App;
