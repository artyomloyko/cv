<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, type ThemeType } from '$lib/stores/theme';
	import '../app.css';

	onMount(() => {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		const savedTheme = (localStorage.getItem('theme') || systemTheme) as ThemeType;
		theme.set(savedTheme);

		if (savedTheme === 'dark') {
			document.documentElement.classList.add('dark');
		}
	});

	$: if (typeof document !== 'undefined') {
		if ($theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', $theme);
	}
</script>

<slot />
