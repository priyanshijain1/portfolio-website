import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function ExperienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 243, 255, 0.3)",
        color: "#F3F4F6",
        boxShadow: "0 10px 30px -5px rgba(0, 243, 255, 0.5)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.1)",
      }}
      style={{
        boxShadow: "none",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="w-[78%] h-[78%] relative overflow-hidden rounded-full p-1.5"
            style={{ background: experience.iconBg }}
          >
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
              className="object-contain p-1"
              style={{ transform: `scale(${experience.iconScale || 1})` }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="text-ctnPrimaryLight text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-ctnSecondaryLight text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  return (
    <motion.section className="relative w-full p-8 mt-20">
      {/* Blobs removed */}
      <motion.div variants={textVariant()}>
        <p className={`sectionSubText text-center`}>What I have been building and achieving</p>
        <h2 className={`sectionHeadText text-center text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPink drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]`}>Highlights</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#ffffff">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(Experience, "work");
