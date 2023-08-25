"use client";

import Navigation from "../../components/navigation";

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="h-full w-full">
			<Navigation />
			<div className="flex flex-col py-10 items-center justify-center">
				{children}
			</div>
		</section>
	);
}
