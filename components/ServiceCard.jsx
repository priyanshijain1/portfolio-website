import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="w-[320px]" tiltMaxAngleX="10" tiltMaxAngleY="10">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full relative group cursor-pointer"
      >
        <div
          className="bg-black/40 backdrop-blur-xl border border-accentCyan/50 rounded-xl py-6 px-8 min-h-[200px] flex justify-center gap-4 items-center flex-col transition-all duration-300 group-hover:-translate-y-2 shadow-[0_0_30px_-5px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_-5px_rgba(0,243,255,0.6)]"
        >
          {/* SVG Container with permanent neon glow */}
          <div className="w-16 h-16 object-contain relative transition-all duration-300 drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] group-hover:scale-110">
            {icon}
          </div>
          {/* Typography */}
          <h3 className="text-white transition-colors duration-300 text-[20px] font-bold text-center w-full">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
