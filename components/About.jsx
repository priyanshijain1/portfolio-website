import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[60vh] flex flex-row items-center justify-between gap-10 px-6 sm:px-16 py-20 max-w-6xl mx-auto"
    >
      {/* LEFT — Text content (takes up most of the space) */}
      {/* Blobs removed */}

      <div className="relative z-10 flex-1 flex flex-col">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="sectionSubText" style={{ color: "#00F3FF" }}>Introduction</p>
          <h2 className="sectionHeadText">About me</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-[17px] leading-[30px] flex flex-col gap-6 text-gray-300"
        >
          <p>
            Hello! I&apos;m{" "}
            <span className="font-bold text-white">Priyanshi Jain</span>,
            a passionate web developer and problem solver. I am deeply interested in AI,
            full-stack development, and competitive programming. I specialize in building
            intelligent applications using Next.js, Node.js, FastAPI, and React.js, alongside strong
            foundations in Data Structures and Algorithms. I enjoy participating in hackathons,
            mentoring juniors, and pushing the boundaries of what web applications can do.
            <br /><br />
            Let&apos;s collaborate to bring your ideas to life!
          </p>

          {/* Socials + Email row — all styled identically */}
          <div className="flex gap-5 items-center flex-wrap">
            {/* Email icon */}
            <Link
              href="mailto:priyanshijain1265@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="priyanshijain1265@gmail.com"
                className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer text-accentCyan"
            >
              <EmailIcon className="w-full h-full" />
            </Link>

            {/* Codeforces icon */}
            <Link
              href="https://codeforces.com/profile/choco_brownie"
              target="_blank"
              rel="noreferrer"
              title="Codeforces"
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              <Image
                src="https://codeforces.org/s/0/favicon-32x32.png"
                alt="Codeforces"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Social icons */}
            {socials.map((social) => (
              <Link
                href={social.link}
                target="_blank"
                key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer text-accentCyan"
              >
                {social.icon}
              </Link>
            ))}
          </div>

        </motion.div>
      </div>

      {/* RIGHT — Square profile image (~1/4 screen width) */}
      <motion.div
        variants={fadeIn("left", "spring", 0.4, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 hidden md:flex flex-col items-center gap-3 shrink-0"
        style={{ width: "32%" }}
      >
        <div
          className="relative overflow-hidden rounded-2xl border-4"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            borderColor: "#00c3ff83",
          }}
        >
          {/* Swap this src for your real photo */}
          <Image
            src="/assets/priyanshi.jpeg"
            alt="Priyanshi Jain"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
