"use client";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/react";

export default function About() {
	return (
		<div className="grid gap-10">
			<motion.div
				className="flex flex-col gap-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
			>
				<h1 className="text-3xl">About</h1>
				<p className="opacity-60">👋 Hi there! I am Khabibur Rokhman</p>
			</motion.div>

			<motion.div
				className="flex flex-col gap-4"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<p>
					I am a self-taught web developer based in Rembang, Indonesia.
					currently working as a software engineer at PT. Fintek Digital
					Nusantara. I started my career from a high school graduate in 2017 to
					become a factory worker and finally anchored to become a programmer.
				</p>
				<p>
					I build web using various JavaScript frameworks, Like Reactjs,
					Express, Next, etc. Outside of my job as an employee, sometimes I
					often do street photography, write blogs, read novels, and badminton.
				</p>
			</motion.div>

			<motion.div
				className="grid grid-rows-4 grid-flow-col gap-10"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="flex flex-col">
					<h2 className="text-2xl mb-3">Skillset</h2>
					<div className="ml-5 flex gap-2 flex-col">
						<li>Bootstrap (3+), Cakra-ui</li>
						<li>Node js, JavaScript (ES2015+)</li>
						<li>jQuery, Reactjs, NextJs</li>
						<li>Mysql, MONGODB, Redis</li>
						<li>Git, Linux (basic command-line operations)</li>
					</div>
				</div>

				<div className="flex flex-col">
					<h2 className="text-2xl mb-3">Links</h2>
					<div className="ml-5 flex gap-2 flex-col">
						<li>
							<Link
								href={"https://github.com/grafisaholic"}
								target="_blank"
								isExternal
								color="secondary"
								showAnchorIcon
							>
								Github
							</Link>
						</li>
						<li>
							<Link
								href={"https://gitlab.com/grafisaholic"}
								target="_blank"
								isExternal
								color="secondary"
								showAnchorIcon
							>
								Gitlab
							</Link>
						</li>
						<li>
							<Link
								href={"https://www.linkedin.com/in/grafisaholic"}
								target="_blank"
								isExternal
								color="secondary"
								showAnchorIcon
							>
								LinkedIn
							</Link>
						</li>
						<li>
							<Link
								href={"https://twitter.com/khabibur__"}
								target="_blank"
								isExternal
								color="secondary"
								showAnchorIcon
							>
								Twitter
							</Link>
						</li>
						<li>
							<Link
								href={"https://www.showwcase.com/grafisaholic"}
								target="_blank"
								isExternal
								color="secondary"
								showAnchorIcon
							>
								Showwcase
							</Link>
						</li>
					</div>
				</div>

				<div className="flex flex-col">
					<h2 className="text-2xl mb-3">Support</h2>
					<div className="ml-5 flex gap-2 flex-col">
						<li>
							<Link
								href={"https://saweria.co/grafisaholic"}
								target="_blank"
								isExternal
								color="secondary"
								showAnchorIcon
							>
								Saweria (indonesia only)
							</Link>
						</li>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
