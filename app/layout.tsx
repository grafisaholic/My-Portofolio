import "@/styles/globals.css";

import React from "react";
import { generateMetadata } from "@/utils/metadata";

import { Providers } from "./provider";

export const metadata = {
	...generateMetadata({
		title: "Khabibur Rokhman - Full-stack Software Engineer",
		description:
			"I'm a passionate and creative full-stack software engineer from indonesian. Visit my website to learn more about me and my projects",
		keywords: [
			"grafisaholic",
			"khabibur rokhman",
			"open-source",
			"full-stack",
			"software engineer",
			"portfolio",
			"development",
			"web",
		],
	}),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={"min-h-screen bg-background"}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<main className="container mx-auto max-w-7xl flex-grow">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
