"use client";

import cn from "classnames";
import { Grid, Spacer, Text, Link } from "@nextui-org/react";

export default function About() {
	return (
		<Grid.Container gap={3} as="div">
			<Grid xs={12} direction={"column"}>
				<Text size={30} h2 css={{ paddingBottom: 0 }}>
					About
				</Text>
				<Text color="rgb(161 161 170)">👋 Hi there! I am Khabibur Rokhman</Text>
			</Grid>

			<Grid>
				<Text>
					I am a self-taught web developer based in Rembang, Indonesia.
					currently working as a software engineer at PT. Fintek Digital
					Nusantara. I started my career from a high school graduate in 2017 to
					become a factory worker and finally anchored to become a programmer.
				</Text>
				<Spacer y={1} />
				<Text>
					I build web using various JavaScript frameworks, Like Reactjs,
					Express, Next, etc. Outside of my job as an employee, sometimes I
					often do street photography, write blogs, read novels, and badminton.
				</Text>
			</Grid>

			<Grid xs={12} direction={"column"}>
				<Text size={28} h2 css={{ paddingBottom: 0 }}>
					Skillset
				</Text>
				<div className={cn("link")} style={{ marginLeft: 20 }}>
					<li>Bootstrap (3+), Cakra-ui</li>
					<li>Node js, JavaScript (ES2015+)</li>
					<li>jQuery, Reactjs, NextJs</li>
					<li>Mysql, MONGODB, Redis</li>
					<li>Git, Linux (basic command-line operations)</li>
				</div>
			</Grid>

			<Grid xs={12} direction={"column"}>
				<Text size={28} h2 css={{ paddingBottom: 0 }}>
					Links
				</Text>
				<div className={cn("link")} style={{ marginLeft: 20 }}>
					<li>
						<Link
							href={"https://github.com/grafisaholic"}
							isExternal
							color="secondary"
						>
							Github
						</Link>
					</li>
					<li>
						<Link
							href={"https://gitlab.com/grafisaholic"}
							isExternal
							color="secondary"
						>
							Gitlab
						</Link>
					</li>
					<li>
						<Link
							href={"https://www.linkedin.com/in/grafisaholic"}
							isExternal
							color="secondary"
						>
							LinkedIn
						</Link>
					</li>
					<li>
						<Link
							href={"https://twitter.com/khabibur__"}
							isExternal
							color="secondary"
						>
							Twitter
						</Link>
					</li>
					<li>
						<Link
							href={"https://www.showwcase.com/grafisaholic"}
							isExternal
							color="secondary"
						>
							Showwcase
						</Link>
					</li>
				</div>
			</Grid>

			<Grid xs={12} direction={"column"}>
				<Text size={28} h2 css={{ paddingBottom: 0 }}>
					Support
				</Text>
				<div className={cn("link")} style={{ marginLeft: 20 }}>
					<li>
						<Link
							href={"https://saweria.co/grafisaholic"}
							isExternal
							color="secondary"
						>
							Saweria (indonesia only)
						</Link>
					</li>
				</div>
			</Grid>
		</Grid.Container>
	);
}
