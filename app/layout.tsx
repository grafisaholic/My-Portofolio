import "@/styles/globals.css";

import React from "react";

import { Providers } from "./provider";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<head />
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
