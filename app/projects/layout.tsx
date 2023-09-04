import Navigation from "@/components/navigation";

import { generateMetadata } from "@/utils/metadata";

export const metadata = {
	...generateMetadata({
		title: "Projects - Khabibur Rokhman",
		description:
			"Some of the projects are from work and some are on my own time",
		keywords: [
			"grafisaholic",
			"khabibur rokhman",
			"tech",
			"project",
			"portofolio",
			"app",
		],
	}),
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-center">
			<Navigation />
			<div className="inline-block max-w-[1280px] justify-center px-6 py-6">
				{children}
			</div>
		</section>
	);
}
