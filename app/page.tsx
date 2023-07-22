"use client";

import { Grid, Text } from "@nextui-org/react";
import Link from "next/link";

import Hero from "@/components/hero";

const navigation = [
	{ name: "projects", href: "/projects" },
	{ name: "about", href: "/about" },
	{ name: "uses", href: "/uses" },
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
					gap: 10,
					display: "flex",
					paddingBottom: 0,
				}}
			>
				{navigation.map((item, i) => (
					<>
						{i > 0 ? <Text css={{ mx: 3 }}>/</Text> : ""}
						<Link key={item.href} href={item.href}>
							<Text css={{ opacity: 0.6 }}>{item.name}</Text>
						</Link>
					</>
				))}
			</Grid>
			<Hero />
		</Grid.Container>
	);
}
