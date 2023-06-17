"use client";

import { Grid, Text } from "@nextui-org/react";
import Link from "next/link";

import Hero from "@/app/components/hero";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "About", href: "/about" },
];

export default function Home() {
	return (
		<Grid.Container
			gap={8}
			alignItems="center"
			justify="center"
			css={{ minHeight: "70vh", flexDirection: "column", paddingTop: "$52" }}
		>
			<Grid
				css={{
					gap: 15,
					display: "flex",
					paddingBottom: 0,
				}}
			>
				{navigation.map((item) => (
					<Link key={item.href} href={item.href}>
						<Text css={{ opacity: 0.6 }}>{item.name}</Text>
					</Link>
				))}
			</Grid>
			<Hero />
		</Grid.Container>
	);
}
