"use client";

import { Card, Grid, Text, CSS, Link } from "@nextui-org/react";

type ProjectProps = {
	release: string;
	name: string;
	desc: string;
	css?: CSS;
};

export const Project = ({ name, desc, ...props }: ProjectProps) => {
	return (
		<Card {...props}>
			<Card.Header>
				<Grid.Container justify="flex-end">
					{/* <Text css={{ color: "$accents8" }}>{release}</Text> */}
					<Text css={{ color: "$accents8" }}>mongodb</Text>
				</Grid.Container>
			</Card.Header>
			<Card.Body css={{ py: "$1" }}>
				<Text size={20} h1 css={{ textGradient: "45deg, $red600, $blue600" }}>
					{name}
				</Text>
				<Text css={{ color: "$accents8" }} size={15}>
					{desc}
				</Text>
			</Card.Body>
			<Card.Footer>
				<Link href={"#"} isExternal color="secondary">
					Show More{" "}
				</Link>
			</Card.Footer>
		</Card>
	);
};

type FeatureProjectProps<ProjectProps> = ProjectProps & {
	link: {
		href: string;
	};
};

export const FeatureProject = ({
	name,
	desc,
	link,
}: FeatureProjectProps<ProjectProps>) => {
	return (
		<Card css={{ py: "$8", px: "$10" }}>
			<Card.Header>
				<Grid.Container justify="flex-end">
					<Text css={{ color: "$accents8" }}>nextjs</Text>
				</Grid.Container>
			</Card.Header>
			<Card.Body css={{ py: "$2" }}>
				<Text size={40} h1 css={{ textGradient: "45deg, $red600, $blue600" }}>
					{name}
				</Text>
				<Text css={{ color: "$accents8" }} size={15}>
					{desc}
				</Text>
			</Card.Body>
			<Card.Footer>
				<Link href={link.href} isExternal color="secondary">
					Show More{" "}
				</Link>
			</Card.Footer>
		</Card>
	);
};
