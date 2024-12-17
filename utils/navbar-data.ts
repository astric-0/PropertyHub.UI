import { HomeIcon, ChatBubbleLeftIcon } from "@heroicons/react/16/solid";
import { HeroIcon, PathTypes, NavItemData } from "@/utils/types";

const makeItemConfig = (
	id: number,
	label: string,
	path: string,
	protection: PathTypes,
	Icon: HeroIcon
): NavItemData => ({
	id,
	label,
	path,
	protection,
	Icon,
});

export const NavConfig: readonly NavItemData[] = Object.freeze([
	makeItemConfig(1, "Home", "/", PathTypes.Public, HomeIcon),
	makeItemConfig(
		2,
		"Contact",
		"/contact",
		PathTypes.Public,
		ChatBubbleLeftIcon
	),
]);
