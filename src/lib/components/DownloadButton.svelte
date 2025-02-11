<script lang="ts">
	import { Download } from 'lucide-svelte';

	function downloadPDF() {
		window.print();
	}
</script>

<button
	onclick={downloadPDF}
	class="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
>
	<Download class="h-4 w-4" />
	Download PDF
</button>
