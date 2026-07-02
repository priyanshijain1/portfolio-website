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
    <main className="relative z-0 w-full min-h-screen bg-bgPrimaryDark">
      {/* Hero Wrapper */}
      <div className="relative w-full z-20">
        <Navbar />
        <Hero loading={loading} isMobile={isMobile} />
      </div>
      {/* Dripping "Cake Frosting" Transition from Hero to Dark Mode */}
      <div className="w-full absolute top-[100vh] left-0 z-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[60px] sm:h-[120px]"
        >
          <path
            fill="#FF1493"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,96C672,85,768,107,864,133.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Subsequent sections */}
      <div className="w-full relative z-10 pt-8">
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
