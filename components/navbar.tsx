import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	LinkedinIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";

export const Navbar = () => {

	return (
		<NextUINavbar isBordered maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
				<Avatar
					isBordered
					disabled
					as="button"
					className="transition-transform"
					color="primary"
					name="Michael Bosciglio"
					size="sm"
					src="me.jpg"
				
				/>
					<NextLink className="flex justify-start items-center gap-1" href="/">
						
						<p className="font-bold text-inherit justify-start ml-1">Michael Bosciglio</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="center">
				<ul className="flex gap-6 ml-3 font-semibold">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-inherit data-[active=true]:font-semibold"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				justify="end"
			>
				<NavbarItem className="flex gap-4 mr-2">
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
						<LinkedinIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
			
			
		</NextUINavbar>
	);
};
