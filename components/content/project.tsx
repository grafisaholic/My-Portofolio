"use client";

import { Card, Grid, Text, CSS, Button } from "@nextui-org/react";
import NextLink from "next/link";

type ProjectProps = {
	release: string;
	name: string;
	desc: string;
	css?: CSS;
	link: {
		href: string;
	};
};

const ExteralIcon = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
		</svg>
	);
};

export const Project = ({ name, desc, link, ...props }: ProjectProps) => {
	return (
		<Card {...props} isHoverable>
			<Card.Header>
				<Grid.Container justify="flex-end">
					{/* <Text css={{ color: "$accents8" }}>{release}</Text> */}
					{/* <Text css={{ color: "$accents8" }}>mongodb</Text> */}
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
				<NextLink href={link.href} passHref target={"_blank"}>
					<Button
						light
						color="secondary"
						auto
						ghost
						shadow
						size={"xs"}
						css={{
							marginTop: 20,
						}}
						iconRight={
							<ExteralIcon fill="currentColor" css={{ marginnLefth: 10 }} />
						}
					>
						Show More
					</Button>
				</NextLink>
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
		<Card css={{ px: "$6" }} isHoverable>
			<Card.Header>
				<Grid.Container justify="flex-end">
					{/* <Text css={{ color: "$accents8" }}>nextjs</Text> */}
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
				<NextLink href={link?.href} passHref target={"_blank"}>
					<Button
						light
						color="secondary"
						auto
						ghost
						shadow
						size={"xs"}
						iconRight={
							<ExteralIcon fill="currentColor" css={{ marginnLefth: 10 }} />
						}
					>
						Show More
					</Button>
				</NextLink>
			</Card.Footer>
		</Card>
	);
};
