<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let title: string;
</script>

<h3 class="mb-4 flex items-center gap-2 text-lg">
	<svelte:component this={icon} class="h-5 w-5" />
	{title}
</h3>
