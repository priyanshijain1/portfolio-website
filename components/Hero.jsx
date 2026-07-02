import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "@/utils/motion";
import { heroTexts } from "@/constants";

function Hero({ loading, isMobile }) {
  return (
    <section
      className="relative w-full min-h-[100svh] mx-auto overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FF1493 0%, #FF69B4 40%, #FF1493 100%)" }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffffff4c, transparent)" }}
      />
      <div
        className="absolute bottom-[-100px] left-[30%] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
      />
      <div
        className="absolute top-[-50px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
      />

      {/* 3D Canvas — full-screen, behind everything */}
      <div className="absolute inset-0 w-full h-full">
        <ComputersCanvas isMobile={isMobile} />
      </div>

      {/* Text overlay — sits on top of canvas, pinned to left */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[100svh] px-6 sm:px-16 pt-28 pb-16 max-w-lg">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Greeting pill tag
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-1 mb-5 border border-white border-opacity-30">
            <span className="text-yellow-300 text-sm">★</span>
            <span className="text-white text-xs font-semibold tracking-widest uppercase">Portfolio</span>
            <span className="text-yellow-300 text-sm">★</span>
          </div> */}

          {/* Name */}
          <div className="flex flex-col mb-4">
            <span className="text-white text-3xl font-bold italic tracking-wide opacity-90 mb-2">
              Hi there! I&apos;m
            </span>

            {/* Sliding motion reveal wrapper */}
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-black leading-none tracking-tight"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  color: "#fcf233ff",
                  textShadow: "3px 3px 0px rgba(0,0,0,0.2)"
                }}
              >
                Priyanshi Jain
              </motion.h1>
            </div>

            {/* Underline accent */}
            <div className="flex items-center gap-2 mt-2">
              <div className="h-[3px] w-12 bg-white rounded-full opacity-80" />
              <div className="h-[3px] w-12 bg-yellow-300 rounded-full" />
              <div className="h-[3px] w-12 bg-white rounded-full opacity-80" />
              <div className="h-[3px] w-12 bg-yellow-300 rounded-full" />
            </div>
          </div>

          {/* Type animation card */}
          <div className="mt-5 bg-transparent backdrop-blur-sm rounded-2xl w-fit">
            <p className="text-white font-extrabold text-lg sm:text-2xl tracking-wide ">
              <TypeAnimation
                sequence={heroTexts}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-white border-opacity-50 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-accentCyan mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
