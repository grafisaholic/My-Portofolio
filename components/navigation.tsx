import {
	Navbar,
	NavbarMenu,
	NavbarContent,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarItem,
	DropdownSection,
} from "@nextui-org/react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { BurgerIcon } from "./icons/burger-menu";
import { IconDark, IconLight } from "./icons/theme";

const navigation = [
	{ name: "projects", href: "/projects" },
	{ name: "about", href: "/about" },
	{ name: "uses", href: "/uses" },
];

export default function Navigation() {
	const { theme, setTheme } = useTheme();

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

				<Dropdown
					showArrow
					classNames={{
						base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
						arrow: "bg-default-200",
					}}
				>
					<DropdownTrigger>
						<Button variant="bordered" isIconOnly className="p-1">
							<BurgerIcon theme={theme} />
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						variant="faded"
						aria-label="Dropdown menu with description"
					>
						<DropdownSection title="Other Menu's">
							<DropdownItem
								endContent={
									<label className="text-sm text-gray-700 dark:text-gray-500">
										incomming
									</label>
								}
							>
								Dashboard
							</DropdownItem>
							<DropdownItem
								endContent={
									<label className="text-sm text-gray-700 dark:text-gray-500">
										incomming
									</label>
								}
							>
								Guesbook
							</DropdownItem>
							<DropdownItem
								endContent={
									<label className="text-sm text-gray-700 dark:text-gray-500">
										incomming
									</label>
								}
							>
								Contact
							</DropdownItem>
							<DropdownItem
								endContent={
									<label className="text-sm text-gray-700 dark:text-gray-500">
										incomming
									</label>
								}
							>
								Etc.
							</DropdownItem>
						</DropdownSection>
						<DropdownSection title="Custom Theme">
							<DropdownItem
								onClick={() => setTheme("dark")}
								startContent={
									<IconDark
										className="text-xl text-default-500 pointer-events-none flex-shrink-0"
										theme={theme}
									/>
								}
							>
								Dark Mode
							</DropdownItem>
							<DropdownItem
								onClick={() => setTheme("light")}
								startContent={
									<IconLight
										className="text-xl text-default-500 pointer-events-none flex-shrink-0"
										theme={theme}
									/>
								}
							>
								Ligh Mode
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
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
