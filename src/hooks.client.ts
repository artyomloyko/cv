import { theme, type Theme } from '$lib/stores/theme';

if (typeof window !== 'undefined') {
	const savedTheme = localStorage.getItem('theme') as Theme | null;
	if (savedTheme) {
		theme.set(savedTheme);
	} else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		console.log(prefersDark);
		theme.set(prefersDark ? 'dark' : 'light');
	}
}
