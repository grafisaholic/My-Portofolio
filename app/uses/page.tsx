"use client";

import { Link } from "@nextui-org/react";
import { DevSoftware, OtherSoftware } from "@/components/content/uses-stack";

export default function Uses() {
	return (
		<div className="grid gap-10 max-w-[1280px] px-6 w-full">
			<div className="flex flex-col">
				<h1 className="text-3xl">Uses</h1>
				<p className="opacity-60">🛠️ Gear and tools that I use day to day</p>
			</div>

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl">Software</h2>
				<div className="ml-5 flex gap-2 flex-col">
					<DevSoftware />
					<OtherSoftware />
				</div>
			</div>

			<div className="grid grid-rows-4 grid-flow-col gap-8">
				<div className="flex flex-col">
					<h2 className="text-2xl mb-3">Harrdware</h2>
					<div className="ml-5 flex gap-2 flex-col">
						<li>Macbook Pro (2017 edition, 13-inch, 256GB storage)</li>
						<li>Monitor Philips 275E2FE 27 Inch 75Hz IPS</li>
						<li>
							Baseus Lampu i-Wok Series USB Screen Hanging Light - DGIWK-B
						</li>
						<li>MOTHERBOARD ASUS PRIME H310M K LGA 1151 GEN 8/9</li>
						<li>Intel Core i3-9400F Processor</li>
						<li>TEAM Elite Plus Black (2x8) 16GB DDR4 kit 3200MHz</li>
						<li>Team TeamGroup MP33 256GB Internal SSD M.2 PCIe SSD 220S</li>
						<li>OASE Bluethooth Speaker S3</li>
					</div>
				</div>

				<div className="flex flex-col">
					<h2 className="text-2xl mb-3">This Sites & Blogs</h2>
					<div className="ml-5 flex gap-2 flex-col">
						<li>
							<Link href={"https://tailwindcss.com"} color="secondary">
								TailwindCss :
							</Link>
							A utility-first CSS framework packed with pre-built classes that
							can be composed to build any design.
						</li>
						<li>
							<Link href={"https://supabase.com"} color="secondary">
								Supebase :
							</Link>
							An open source Firebase alternative used to keep track of article
							page views and reactions on my site.
						</li>
						<li>
							<Link href={"https://dribbble.com"} color="secondary">
								Dribble :
							</Link>
							Resource for inspired design ui/ux for any new project.
						</li>
						<li>
							<Link href={"https://storyset.com"} color="secondary">
								Storyset :
							</Link>
							Resource for awesome free customizable illustrations for your next
							project
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}
