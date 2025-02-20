<script lang="ts">
	import { Laptop } from 'lucide-svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { Skill } from '$lib/types';

	export let skills: Skill[];
</script>

<section>
	<SectionTitle icon={Laptop} title="Technical Skills" />
	<div class="grid-container grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
		{#each skills as skill}
			<div class="space-y-3">
				<h4 class="flex items-center gap-2 font-medium text-foreground">
					<skill.Icon class="h-5 w-5 text-primary" />
					{skill.title}
				</h4>
				<ul class="list-inside list-disc space-y-2 font-medium text-foreground/80">
					{#each skill.items as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	@media print {
		.grid-container {
			display: grid !important;
			grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
		}
	}
</style>
