<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Moon, Sun } from 'lucide-svelte';

	function toggleTheme() {
		theme.update((t) => (t === 'light' ? 'dark' : 'light'));
	}
</script>

<button
	class="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
	onclick={toggleTheme}
>
	<Moon class="h-5 w-5 rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-0 absolute" />
	<Sun class="h-5 w-5 rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
	<span class="sr-only">Toggle theme</span>
</button>
