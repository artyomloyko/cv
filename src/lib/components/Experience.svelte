<script lang="ts">
	import { Briefcase } from 'lucide-svelte';
	import { formatDuration, intervalToDuration } from 'date-fns';
	import { parseDate } from '$lib/utils';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { Experience } from '$lib/types';

	export let experience: Experience[];
</script>

<section>
	<SectionTitle icon={Briefcase} title="Professional Experience" />
	<ol class="flex flex-col gap-8">
		{#each experience as item}
			<li class="relative">
				<div class="mb-2 flex justify-between">
					<div class="inline-flex items-center gap-2">
						<span
							class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-8 ring-background"
						>
							<item.Logo />
						</span>
						<div class="flex flex-col">
							<h4 class="text-foreground">{item.title}</h4>
							<div class="text-sm text-muted-foreground">{item.company}</div>
						</div>
					</div>
					<time class="flex flex-col items-center text-sm text-foreground">
						<span>{item.dateStart} - {item.dateEnd}</span>
						<span class="text-xs italic text-muted-foreground">
							{formatDuration(
								intervalToDuration({
									start: parseDate(item.dateStart),
									end: item.dateEnd === 'Present' ? new Date() : parseDate(item.dateEnd)
								}),
								{ format: ['years', 'months'] }
							)}
						</span>
					</time>
				</div>
				<ul
					class="list-inside list-disc space-y-2 text-foreground/80 underline-offset-4 [&_a:hover]:text-primary [&_a]:underline [&_a]:decoration-dashed [&_a]:decoration-1"
				>
					{#each item.achievements as achievement}
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<li>{@html achievement}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ol>
</section>
