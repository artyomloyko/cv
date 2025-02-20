<script lang="ts">
	import { Star } from 'lucide-svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	export let summary: string;
</script>

<section>
	<SectionTitle icon={Star} title="Summary" />
	<p class="leading-relaxed text-foreground/80">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html summary}
	</p>
</section>
