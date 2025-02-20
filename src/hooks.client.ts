import { theme } from '$lib/stores/theme';

if (typeof window !== 'undefined') {
	const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
	if (savedTheme) {
		theme.set(savedTheme);
	} else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme.set(prefersDark ? 'dark' : 'light');
	}
}
