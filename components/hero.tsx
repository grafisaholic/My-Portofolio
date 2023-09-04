import Link from "next/link";
import { motion } from "framer-motion";

import CurrentFavTech from "./content/current-fav-tech";

function Hero() {
	return (
		<section className="gap-8 text-center flex flex-col container">
			<motion.h1
				className="tracking-tight inline font-bold text-[60px] bg-gradient-to-r from-red-600 to-blue-600  bg-clip-text text-transparent"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				Grafisaholic
			</motion.h1>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<p className="opacity-60">
					Hi, my name is Khabibur Rokhman. Full stack web developer skilled SQL,
					mongoDB, node.js, and want to try to learn more.
				</p>
				<p>
					<span className="opacity-60">
						I&apos;m currently building project{" "}
					</span>
					<Link
						className="underline decoration-pink-600 decoration-[3px] underline-offset-4  hover:text-pink-400 hover:decoration-[1px] hover:decoration-pink-500 hover:font-normal duration-500"
						passHref
						href="https://payreless.com"
						target="_blank"
					>
						payreless
					</Link>{" "}
					<span className="opacity-60">and working on </span>
					<Link
						className="underline decoration-pink-600 decoration-[3px] underline-offset-4 hover:text-pink-400 hover:decoration-[1px] hover:decoration-pink-500 hover:font-normal duration-500"
						passHref
						href="https://findig.id"
						target="_blank"
					>
						PT. Fintek Digital Nusantara
					</Link>{" "}
					<span className="opacity-60">at day to day.</span>
				</p>
			</motion.div>

			<motion.div
				className="items-center gap-3 justify-center w-full flex flex-col"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
			>
				<h3 className="opacity-60">Current favorite tech stack / tools :</h3>
				<CurrentFavTech />
			</motion.div>
		</section>
	);
}

export default Hero;
