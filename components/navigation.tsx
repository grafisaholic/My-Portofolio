import { Navbar, Text } from "@nextui-org/react";
import Link from "next/link";

const navigation = [
	{ name: "projects", href: "/projects" },
	{ name: "about", href: "/about" },
	{ name: "uses", href: "/uses" },
];

export default function Navigation() {
	return (
		<Navbar isBordered variant="floating">
			<Navbar.Brand>
				<Link href="/">
					<Text h1 size={30} css={{ textGradient: "45deg, $red600, $blue600" }}>
						GR
					</Text>
				</Link>
			</Navbar.Brand>
			<Navbar.Content hideIn={"xs"}>
				{navigation.map((item) => (
					<Link key={item.href} href={item.href}>
						<Text css={{ opacity: 0.6 }}>{item.name}</Text>
					</Link>
				))}
			</Navbar.Content>
			<Navbar.Toggle showIn="xs" />
			<Navbar.Collapse>
				{navigation.map((item) => (
					<Navbar.CollapseItem key={item.href}>
						<Link href={item.href}>
							<Text css={{ opacity: 0.6 }}>{item.name}</Text>
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
}
