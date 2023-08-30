import Link from "next/link";

import Hero from "@/components/hero";

const navigation = [
	{ name: "projects", href: "/projects" },
	{ name: "about", href: "/about" },
	{ name: "uses", href: "/uses" },
];

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-8 h-full px-4 md:px-6">
			<header className="flex">
				{navigation.map((item, i) => (
					<div key={item.name}>
						{i > 0 ? <span className="mx-3">/</span> : ""}

						<Link passHref href={item.href}>
							<span className="opacity-60">{item.name}</span>
						</Link>
					</div>
				))}
			</header>

			<Hero />
		</section>
	);
}
