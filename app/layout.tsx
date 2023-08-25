import "@/styles/globals.css";

import React from "react";
import { Providers } from "./provider";
// import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<head />
			<body>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<main className="h-screen">{children}</main>
				</Providers>
			</body>
		</html>
	);
}
