"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemeProvider } from "next-themes";

// import { darkTheme, lightTheme } from "@/app/styles/theme";
import "@/app/styles/globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<head />
			<body>
				<NextUIProvider>
					<div className="wrapper">{children}</div>
				</NextUIProvider>
			</body>
		</html>
	);
}
