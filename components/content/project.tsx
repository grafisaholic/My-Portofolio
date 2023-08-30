"use client";

import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import NextLink from "next/link";

type ProjectProps = {
	release: string;
	name: string;
	desc: string;
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
		<Card
			{...props}
			isHoverable
			className="p-6 hover:scale-105 hover:shadow-lg hover:shadow-purple-800/50 "
		>
			<CardBody className="py-2 flex gap-2 px-3">
				<h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600  bg-clip-text text-transparent">
					{name}
				</h1>
				<p className="text-sm opacity-60">{desc}</p>
			</CardBody>
			<CardFooter>
				<NextLink href={link.href} passHref target={"_blank"}>
					<Button
						variant="ghost"
						color="secondary"
						size="sm"
						className="mt-10"
						endContent={
							<ExteralIcon fill="currentColor" css={{ marginnLefth: 10 }} />
						}
					>
						Show More
					</Button>
				</NextLink>
			</CardFooter>
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
		<Card
			className="p-6 h-full hover:scale-105 hover:shadow-lg hover:shadow-purple-800/50"
			isHoverable
		>
			<CardBody className="py-2 flex gap-2 px-3">
				<h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
					{name}
				</h1>
				<p className="opacity-60">{desc}</p>
			</CardBody>
			<CardFooter>
				<NextLink href={link?.href} passHref target={"_blank"}>
					<Button
						variant="ghost"
						color="secondary"
						size="sm"
						className="mt-10"
						endContent={
							<ExteralIcon fill="currentColor" css={{ marginnLefth: 10 }} />
						}
					>
						Show More
					</Button>
				</NextLink>
			</CardFooter>
		</Card>
	);
};
