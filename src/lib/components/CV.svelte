<script lang="ts">
	import { Star, Laptop, Briefcase, GraduationCap } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import DownloadButton from './DownloadButton.svelte';
	import { CV } from '$lib/constants/cv';
</script>

<svelte:head>
	<title>{CV.name} - {CV.title}</title>
	<meta name="description" content={`${CV.name} - ${CV.title} - CV`} />
</svelte:head>

<div class="min-h-screen bg-muted/50 p-4 text-foreground md:p-8 print:invisible">
	<div
		class="print-shadow-none mx-auto max-w-4xl rounded-xl border bg-background py-6 shadow-lg md:py-8"
	>
		<div class="cv-content">
			<!-- Header -->
			<div class="mb-6 flex items-start justify-between border-b border-primary/20 pb-6">
				<div class="w-full px-6 md:px-8">
					<div class="inline-flex w-full justify-between">
						<h1 class="text-3xl font-bold">{CV.name}</h1>
						<div class="inline-flex items-center gap-2 print:hidden">
							<ThemeToggle />
							<DownloadButton />
						</div>
					</div>
					<h2 class="flex items-center gap-2 text-2xl">
						{CV.title}
						<span
							class="inline-flex items-center gap-1 rounded-xl bg-secondary px-2 py-1 text-xs font-semibold text-foreground"
						>
							<GraduationCap class="h-4 w-4" />
							BSc in IT
						</span>
					</h2>
					<div class="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
						{#each CV.contacts as contact}
							<a
								href={contact.href}
								class="flex items-center gap-1 transition-colors hover:text-primary"
							>
								<contact.Icon class="h-4 w-4" />
								{contact.title}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="mb-6 flex flex-col gap-8 px-6 md:px-8">
				<!-- Professional Summary -->
				<section>
					<h3 class="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
						<Star class="h-5 w-5 text-primary" />
						Professional Summary
					</h3>
					<p class="leading-relaxed text-foreground/80">
						{@html CV.summary}
					</p>
				</section>

				<!-- Technical Skills -->
				<section>
					<h3 class="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
						<Laptop class="h-5 w-5 text-primary" />
						Technical Skills
					</h3>
					<div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
						{#each CV.skills as skill}
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

				<!-- Professional Experience -->
				<section>
					<h3 class="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
						<Briefcase class="h-5 w-5 text-primary" />
						Professional Experience
					</h3>
					<ol class="flex flex-col gap-10 border-s-2 border-gray-200 dark:border-gray-700">
						{#each CV.experience as item}
							<li class="relative ms-6">
								<span
									class="absolute left-[-41px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-8 ring-background"
								>
									<item.Logo />
								</span>

								<div class="mb-2 flex justify-between">
									<div>
										<h4 class="font-semibold text-foreground">{item.title}</h4>
										<div class="text-sm text-muted-foreground">{item.company}</div>
									</div>
									<time class="text-sm text-muted-foreground">
										{item.dateStart} - {item.dateEnd}
									</time>
								</div>
								<ul class="list-inside list-disc space-y-2 text-foreground/80">
									{#each item.achievements as achievement}
										<li>{@html achievement}</li>
									{/each}
								</ul>
							</li>
						{/each}
					</ol>
				</section>

				<!-- Education -->
				<!-- <section>
        <h3 class="text-lg font-semibold flex items-center gap-2 mb-4 text-foreground">
          <Award class="h-5 w-5 text-primary" />
          Certifications
        </h3>
        <div class="w-full inline-flex justify-between">
          <div class="flex justify-between mb-1">
            <div class="flex items-center gap-2">
               <span class="h-6 w-6">
                 <RssLogo />
               </span>
              <div>
                <h4 class="font-semibold text-foreground">Web Development Course</h4>
                <div class="text-muted-foreground">RS School | EPAM</div>
              </div>
            </div>
          </div>
          <div class="text-sm text-muted-foreground ml-7">Aug 2017 - Sep 2018</div>
        </div>
      </section> -->
			</div>
		</div>
	</div>
</div>

<style>
	@media print {
		@page {
			size: auto;
			margin: 5mm;
		}

		.cv-content {
			zoom: 80%;
			visibility: visible;
			position: fixed;
			left: 0;
			top: 0;
		}
	}
</style>
