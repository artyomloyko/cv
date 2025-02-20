<script lang="ts">
	import CV from '$lib/constants';
	import Header from '$lib/components/Header.svelte';
	import Summary from '$lib/components/Summary.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
</script>

<svelte:head>
	<title>{CV.name} - {CV.title}</title>
	<meta name="description" content={`${CV.name} - ${CV.title} - CV`} />
</svelte:head>

<div class="min-h-screen bg-muted/50 p-4 text-foreground md:p-8 print:invisible">
	<div
		class="cv-content mx-auto flex max-w-5xl flex-col gap-6 rounded-xl border bg-background p-6 !pb-14 shadow-lg md:p-8"
	>
		<Header name={CV.name} title={CV.title} contacts={CV.contacts} />
		<Summary summary={CV.summary} />
		<Skills skills={CV.skills} />
		<Experience experience={CV.experience} />
	</div>
</div>

<style>
	@media print {
		@page {
			size: 1100px 1600px;
			margin: 0;
		}

		.cv-content {
			margin: 15mm;
			padding: 0;
			visibility: visible;
			position: fixed;
			left: 0;
			top: 0;
			visibility: visible;
			box-shadow: none;
			border: none;
		}
	}
</style>
