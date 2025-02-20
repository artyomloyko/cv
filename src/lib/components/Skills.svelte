<script lang="ts">
	import { Laptop } from 'lucide-svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { Skill } from '$lib/types';

	export let skills: Skill[];
</script>

<section>
	<SectionTitle icon={Laptop} title="Technical Skills" />
	<ul class="list-inside list-disc space-y-1">
		{#each skills as skill}
			<li class="font-medium text-foreground/80">
				<span class="text-foreground">{skill.title}:</span>
				{skill.items.join(', ')}.
			</li>
		{/each}
	</ul>
</section>
