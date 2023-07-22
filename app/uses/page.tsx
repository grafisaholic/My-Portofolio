"use client";

import cn from "classnames";
import { Grid, Text, Link } from "@nextui-org/react";
import { DevSoftware, OtherSoftware } from "@/components/content/uses-stack";

export default function Uses() {
	return (
		<Grid.Container gap={3} as="div">
			<Grid xs={12} direction={"column"}>
				<Text size={30} h2 css={{ paddingBottom: 0 }}>
					Uses
				</Text>
				<Text color="rgb(161 161 170)">
					🛠️ Gear and tools that I use day to day
				</Text>
			</Grid>

			<Grid xs={12} direction={"column"}>
				<Text size={28} h2 css={{ paddingBottom: 0 }}>
					Software
				</Text>
				<div className={cn("link")} style={{ marginLeft: 20 }}>
					<Grid.Container alignItems="center">
						<Grid xs={12} md={6} direction="column">
							<DevSoftware />
						</Grid>
						<Grid xs={12} md={6} direction="column">
							<OtherSoftware />
						</Grid>
					</Grid.Container>
				</div>
			</Grid>

			<Grid xs={12} direction={"column"}>
				<Text size={28} h2 css={{ paddingBottom: 0 }}>
					Hardware
				</Text>
				<div className={cn("link")} style={{ marginLeft: 20 }}>
					<li>Macbook Pro (2017 edition, 13-inch, 256GB storage)</li>
					<li>Monitor Philips 275E2FE 27 Inch 75Hz IPS</li>
					<li>Baseus Lampu i-Wok Series USB Screen Hanging Light - DGIWK-B</li>
					<li>MOTHERBOARD ASUS PRIME H310M K LGA 1151 GEN 8/9</li>
					<li>Intel Core i3-9400F Processor</li>
					<li>TEAM Elite Plus Black (2x8) 16GB DDR4 kit 3200MHz</li>
					<li>Team TeamGroup MP33 256GB Internal SSD M.2 PCIe SSD 220S</li>
					<li>OASE Bluethooth Speaker S3</li>
				</div>
			</Grid>

			<Grid xs={12} direction={"column"}>
				<Text size={28} h2 css={{ paddingBottom: 0 }}>
					This Sites & Blogs
				</Text>
				<div className={cn("link")} style={{ marginLeft: 20 }}>
					<li>
						<Link
							href={"https://tailwindcss.com"}
							color="secondary"
							css={{
								marginRight: 6,
							}}
						>
							TailwindCss :
						</Link>
						A utility-first CSS framework packed with pre-built classes that can
						be composed to build any design.
					</li>
					<li>
						<Link
							href={"https://supabase.com"}
							color="secondary"
							css={{
								marginRight: 6,
							}}
						>
							Supebase :
						</Link>
						An open source Firebase alternative used to keep track of article
						page views and reactions on my site.
					</li>
					<li>
						<Link
							href={"https://dribbble.com"}
							color="secondary"
							css={{
								marginRight: 6,
							}}
						>
							Dribble :
						</Link>
						Resource for inspired design ui/ux for any new project.
					</li>
					<li>
						<Link
							href={"https://storyset.com"}
							color="secondary"
							css={{
								marginRight: 6,
							}}
						>
							Storyset :
						</Link>
						Resource for awesome free customizable illustrations for your next
						project
					</li>
				</div>
			</Grid>
		</Grid.Container>
	);
}
