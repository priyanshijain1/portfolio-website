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
        background: "linear-gradient(135deg, #e6faff 0%, #e6faff 100%)",
        color: "#4b5563",
        boxShadow: "0 10px 20px -5px rgba(0, 221, 255, 0.42)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #e6faff",
      }}
      style={{
        boxShadow: "none",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, backgroundColor: "#fee6ff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[60%] h-[60%] relative">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
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
      <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#ffd84d]/10 blur-xl" />
      <div className="pointer-events-none absolute right-[-4rem] bottom-0 h-80 w-80 rounded-full bg-[#34d399]/10 blur-xl" />
      <div className="pointer-events-none absolute left-[40%] top-0 h-60 w-60 rounded-full bg-[#5fdde8]/10 blur-xl" />
      <motion.div variants={textVariant()}>
        <p className={`sectionSubText text-center`}>What I have been building and achieving</p>
        <h2 className={`sectionHeadText text-center`}>Highlights.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#00c8ffeb">
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
