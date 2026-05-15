import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "@/utils/motion";

const tech = [
  technologies.languages,
  technologies.frameworks,
  technologies.libraries,
  technologies.databases,
  technologies.tools,
  technologies.environments,
];

const techVariants = [
  "Languages",
  "Frameworks",
  "Libraries",
  "Databases",
  "Tools",
  "Environments",
];

function Tech() {
  const languages = tech.map((technology, index) => (
    <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
      <h3 className="md:hidden">{techVariants[index]}</h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-2"
        variants={fadeIn("right", "spring", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {technology.map((tech, index) => (
          <Link
            href={tech.link}
            key={tech.name}
            target="_blank"
            className="flex flex-row"
          >
            <div className="w-[40px] h-[40px] relative flex flex-row items-center group cursor-pointer">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              />

              <div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight text-ctnPrimaryLight text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
                {tech.name}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  ));

  const techNames = techVariants.map((tech, index) => (
    <h3 className="h-[50px] md:flex items-center hidden" key={index}>
      {tech}
    </h3>
  ));

  return (
    <section className="relative w-full h-fit p-8 mt-20" id="skills">
      <div className="pointer-events-none absolute -left-16 top-10 h-80 w-80 rounded-full bg-[#5fdde8]/10 blur-xl" />
      <div className="pointer-events-none absolute right-[-4rem] bottom-10 h-72 w-72 rounded-full bg-[#ff4fa3]/10 blur-xl" />
      <div className="pointer-events-none absolute left-[60%] top-0 h-56 w-56 rounded-full bg-[#ffd84d]/10 blur-xl" />
      <div className="pointer-events-none absolute left-[30%] bottom-0 h-64 w-64 rounded-full bg-[#a78bfa]/10 blur-xl" />

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have learnt so far</p>
        <h2 className={"sectionHeadText"}>Skills</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 text-ctnSecondaryLight bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-skills-pink"
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full gap-5"
        >
          {techNames}
        </motion.div>
        <div className="w-[2px] h-[400px] bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />
        <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
          {languages}
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
