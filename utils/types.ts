import { ComponentType, SVGProps } from "react";

export enum PathTypes {
	Private = "Private",
	Protected = "Protected",
	Public = "Public",
}

export interface NavItemData {
	id: number
  label: string;
	path: string;
  protection: PathTypes,
  Icon: HeroIcon,
}

export type HeroIcon = ComponentType<SVGProps<SVGSVGElement>>;
