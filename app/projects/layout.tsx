"use client";
import { Container } from "@nextui-org/react";
import React from "react";

import Navigation from "../components/navigation";

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navigation />
			<Container css={{ py: "$10", px: "$8" }}>{children}</Container>
		</>
	);
}
