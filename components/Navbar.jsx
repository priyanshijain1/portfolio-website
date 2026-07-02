import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { navLinks } from "../constants";
import Menu from "./../public/assets/icons/menu.svg";
import Close from "./../public/assets/icons/close.svg";
import PJLogo from "./../public/assets/branding/pj-logo.svg";
import { slideIn } from "@/utils/motion";

function Navbar() {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		document.body.style.overflowY = "auto";
	}, []);

	return (
		<>
			<nav
				className={`paddingX w-full flex items-center py-5 fixed top-0 z-30 bg-transparent backdrop-filter backdrop-blur-xl bg-opacity-60`}
			>
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					<div className="flex items-center gap-3 sm:gap-4">
						<div className="w-12 h-10 sm:w-14 sm:h-12 shrink-0 flex items-center justify-center overflow-hidden rounded-xl bg-white/95 shadow-[0_8px_22px_rgba(255,20,147,0.3)]">
							<PJLogo className="w-full h-full object-contain" />
						</div>
						<Link href="/">
							<p className="text-ctnPrimaryLight text-[18px] font-bold cursor-pointer flex ">
								Priyanshi Jain &nbsp;
								<span className="lg:block hidden">
									{" "}
									| Full-Stack Developer
								</span>
							</p>
						</Link>
					</div>

					<ul className="list-none hidden md:flex flex-row gap-10 items-center">
						{navLinks.map((nav) => (
							<li
								key={nav.id}
								className={`text-ctnPrimaryLight border-secondary transition-all duration-200 ease-in text-[18px] font-medium cursor-pointer ${
									active === nav.title
										? "text-quaternary border-b-2 border-quaternary"
										: "hover:text-tertiary hover:border-y-2"
								}`}
								onClick={() => setActive(nav.title)}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>

					<div className="md:hidden flex flex-1 justify-end items-center">
						<div
							className="w-[28px] h-[28px] object-contain text-ctnPrimaryLight flex justify-center items-center cursor-pointer"
							onClick={() => setToggle(!toggle)}
						>
							{toggle ? (
								<Close className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</div>

						<motion.div
							variants={slideIn("right", "tween", 0, 0.3)}
							initial="hidden"
							whileInView="show"
							className={`${
								!toggle ? "hidden" : "flex"
							} p-6 bg-bgSecondaryLight absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
						>
							<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
								{navLinks.map((nav) => (
									<li
										key={nav.id}
										className={`font-poppins font-medium cursor-pointer text-[16px] ${
											active === nav.title
												? "text-secondary"
												: "text-ctnPrimaryLight"
										}`}
										onClick={() => {
											setToggle(!toggle);
											setActive(nav.title);
										}}
									>
										<a href={`#${nav.id}`}>{nav.title}</a>
									</li>
								))}
							</ul>
						</motion.div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
