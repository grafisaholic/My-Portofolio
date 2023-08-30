import {
	Navbar,
	NavbarMenu,
	NavbarContent,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

const navigation = [
	{ name: "projects", href: "/projects" },
	{ name: "about", href: "/about" },
	{ name: "uses", href: "/uses" },
];

export default function Navigation() {
	return (
		<Navbar isBordered maxWidth="xl" position="sticky">
			<NavbarContent>
				<Link href="/">
					<h1 className="text-[30px] font-extrabold bg-gradient-to-r from-red-600 to-blue-600  bg-clip-text text-transparent">
						GR
					</h1>
				</Link>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				{navigation.map((item) => (
					<NavbarItem key={item.href}>
						<Link href={item.href} passHref className="opacity-60">
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent className="sm:hidden" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarMenu>
				{navigation.map((item) => (
					<NavbarMenuItem key={item.href}>
						<Link href={item.href} passHref className="opacity-60">
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
