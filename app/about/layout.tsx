import Navigation from "@/components/navigation";

import { generateMetadata } from "@/utils/metadata";

export const metadata = {
	...generateMetadata({
		title: "About - Khabibur Rokhman",
		description: "Learn more about me, skillset, links and more.",
		keywords: [
			"grafisaholic",
			"khabibur rokhman",
			"information",
			"about",
			"skillset",
			"links",
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
