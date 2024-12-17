"use client";

import { usePathname } from "next/navigation";
import { HeroIcon, NavItemData } from "@/utils/types";
import { NavConfig } from "@/utils/navbar-data";
import { classy } from "@/utils/helpers/classy";

export function Navbar() {
	const pathname = usePathname();
	const isActive = (path: string): boolean => pathname == path;
	return (
		<nav className="sticky top-0 z-50">
			<div className="navbar">
				<div className="navbar-start">
					<a className="btn btn-ghost normal-case text-xl">PropertyHub</a>
				</div>
				
				<div className="navbar-end">
					<ul className="px-3 menu-horizontal gap-4">
						{NavConfig.map((nav: NavItemData) => (
							<NavItem key={nav.id} {...nav} active={isActive(nav.path)} />
						))}
						
						<label className="input bg-white flex rounded-badge items-center  border-header gap-2">
							<input type="text" className="text-text-primary" placeholder="Search..." />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="h-4 w-4 opacity-70">
								<path
									fillRule="evenodd"
									d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
									clipRule="evenodd" />
							</svg>
						</label>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export function NavItem({
	active = false,
	Icon,
	label,
	path = "#",
}: {
	active?: boolean;
	Icon: HeroIcon;
	label: string;
	path?: string;
}) {
	return (
		<li>
			<a
				href={path}
				className={classy("btn btn-ghost px-5 rounded-badge text-primary m-0 p-0", {
					"bg-white border-header": active,
					"": !active,
				})}
			>
				<Icon className="size-7" />
				{label}
			</a>
		</li>
	);
}
