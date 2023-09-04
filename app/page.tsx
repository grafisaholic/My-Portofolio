"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Hero from "@/components/hero";
import NagivationMenu from "@/data/navigation.json";

export default function Home() {
	const featuredNav = NagivationMenu.filter((n) => n.isFeatured);

	return (
		<section className="flex flex-col items-center justify-center gap-6 h-full px-4 md:px-6">
			<motion.header
				className="flex"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{featuredNav.map((item, i) => (
					<div key={item.name}>
						{i > 0 ? <span className="mx-3">/</span> : ""}

						<Link
							className="text-gray-300 hover:text-pink-400 duration-500"
							passHref
							href={item.link}
						>
							{item.title}
						</Link>
					</div>
				))}
			</motion.header>

			<Hero />
		</section>
	);
}
