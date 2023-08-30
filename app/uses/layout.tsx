"use client";

import Navigation from "../../components/navigation";

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
