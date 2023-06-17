"use client";
import cn from "classnames";
import { Grid, Spacer, Text } from "@nextui-org/react";

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
				<div className={cn("link")}>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<style jsx>
						{`
							.link {
								margin-left: 20px;
							}
						`}
					</style>
				</div>
			</Grid>

			<Grid xs={12} direction={"column"}>
				<Text size={28} h2 css={{ paddingBottom: 0 }}>
					Links
				</Text>
				<div className={cn("link")}>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<li>jsdbfs</li>
					<style jsx>
						{`
							.link {
								margin-left: 20px;
							}
						`}
					</style>
				</div>
			</Grid>
		</Grid.Container>
	);
}
