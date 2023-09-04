import Navigation from "@/components/navigation";

import { generateMetadata } from "@/utils/metadata";

export const metadata = {
	...generateMetadata({
		title: "Uses - Khabibur Rokhman",
		description: "Gear and tools that I use day to day",
		keywords: [
			"grafisaholic",
			"khabibur rokhman",
			"hardware",
			"software",
			"apps",
			"tools",
			"extensions",
			"stack",
			"website",
			"tech",
			"uses",
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
			<div className="inline-block max-w-[1280px] px-6 py-6">{children}</div>
		</section>
	);
}
