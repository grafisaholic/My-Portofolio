"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Hero from "@/components/hero";

const navigation = [
	{ name: "projects", href: "/projects" },
	{ name: "about", href: "/about" },
	{ name: "uses", href: "/uses" },
];

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-6 h-full px-4 md:px-6">
			<motion.header
				className="flex"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{navigation.map((item, i) => (
					<div key={item.name}>
						{i > 0 ? <span className="mx-3">/</span> : ""}

						<Link passHref href={item.href}>
							<span className="opacity-60">{item.name}</span>
						</Link>
					</div>
				))}
			</motion.header>

			<Hero />
		</section>
	);
}
