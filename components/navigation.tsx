"use client";

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
import NavigationMenu from "@/data/navigation.json";

export default function Navigation() {
	const { theme, setTheme } = useTheme();

	const featuredNav = NavigationMenu.filter((n) => n.isFeatured);
	// const otherNav = NavigationMenu.filter((n) => !n.isFeatured);

	return (
		<Navbar isBordered maxWidth="xl" position="sticky">
			<NavbarContent>
				<Link href="/">
					<h1 className="text-[30px] font-bold bg-gradient-to-r from-red-600 to-blue-600  bg-clip-text text-transparent">
						Grafisaholic
					</h1>
				</Link>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				{featuredNav.map((n) => (
					<NavbarItem key={n.name}>
						<Link
							href={n.link}
							passHref
							className="text-gray-300 hover:text-pink-400 duration-500"
						>
							{n.title}
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
						{/* <DropdownSection title="Other Menu's">
							{otherNav.map((n) => (
								<DropdownItem
									endContent={
										n.isCommingSoon && (
											<label className="text-sm text-gray-700 dark:text-gray-500">
												incomming
											</label>
										)
									}
									key={n.name}
								>
									{n.title}
								</DropdownItem>
							))}
						</DropdownSection> */}
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
				{featuredNav.map((n) => (
					<NavbarMenuItem key={n.name} className="my-1 flex justify-between">
						<Link href={n.link} passHref className="opacity-60">
							{n.title}
						</Link>

						{n.isCommingSoon && (
							<label className="text-sm text-gray-700 dark:text-gray-500">
								incomming
							</label>
						)}
					</NavbarMenuItem>
				))}
				<div className="mt-auto py-10 flex justify-between">
					<NavbarMenuItem>
						<Button
							variant={theme == "light" ? "bordered" : undefined}
							onClick={() => setTheme("dark")}
							startContent={
								<IconDark
									className="text-xl text-default-500 pointer-events-none flex-shrink-0"
									theme={theme}
								/>
							}
						>
							Dark Mode
						</Button>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Button
							variant={theme == "dark" ? "bordered" : undefined}
							onClick={() => setTheme("light")}
							startContent={
								<IconLight
									className="text-xl text-default-500 pointer-events-none flex-shrink-0"
									theme={theme}
								/>
							}
						>
							Light Mode
						</Button>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</Navbar>
	);
}
