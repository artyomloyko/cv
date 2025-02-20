<script lang="ts">
	import { GraduationCap } from 'lucide-svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import DownloadButton from '$lib/components/DownloadButton.svelte';
	import type { Contact } from '$lib/types'; // You'll need to create this type

	export let name: string;
	export let title: string;
	export let contacts: Contact[];
</script>

<div class="flex w-full flex-col items-start justify-between border-b border-primary/20 pb-4">
	<div class="inline-flex w-full justify-between">
		<h1 class="mb-2 text-5xl font-bold">{name}</h1>
		<div class="inline-flex items-center gap-2 print:hidden">
			<ThemeToggle />
			<DownloadButton />
		</div>
	</div>
	<h2 class="flex items-center gap-2 text-xl">
		{title}
		<span
			class="inline-flex items-center gap-1 rounded-xl bg-secondary px-2 py-1 text-xs text-foreground"
		>
			<GraduationCap class="h-4 w-4" />
			BSc in IT
		</span>
	</h2>
	<div class="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
		{#each contacts as contact}
			<a href={contact.href} class="flex items-center gap-1 transition-colors hover:text-primary">
				<contact.Icon class="h-4 w-4" />
				{contact.title}
			</a>
		{/each}
	</div>
</div>
