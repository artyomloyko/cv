import type { ComponentType, SvelteComponent } from 'svelte';

export interface Contact {
	title: string;
	href: string;
	Icon: ComponentType;
}

export interface Skill {
	title: string;
	Icon: ComponentType;
	items: string[];
}

export interface Experience {
	title: string;
	company: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Logo: new (...args: any[]) => SvelteComponent;
	dateStart: string;
	dateEnd: string;
	achievements: string[];
}
