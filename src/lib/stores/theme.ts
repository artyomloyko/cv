import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
	if (typeof window !== 'undefined') {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return (localStorage.getItem('theme') as Theme) || (prefersDark ? 'dark' : 'light');
	}
	return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

if (typeof window !== 'undefined') {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(value);
	});
}
