<script setup lang="ts">
const route = useRoute()

useHead({
	title: `${route.params.slug}`
})
</script>

<template>
	<div>
		<div class="container">
			<article
				class="prose max-w-none dark:prose-invert prose-pre:text-gray-700 prose-pre:bg-white dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300"
			>
				<ContentDoc v-slot="{ doc }">
					<div class="grid grid-cols-6 gap-16">
						<div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
							<ContentRenderer :value="doc" />
						</div>
						<div v-if="doc.toc" class="col-span-2 not-prose">
							<aside class="sticky top-8">
								<div class="mb-2 font-semibold">Table of Content</div>
								<nav>
									<TocLinks :links="doc.body.toc.links" />
								</nav>
							</aside>
						</div>
					</div>
				</ContentDoc>
			</article>
		</div>
	</div>
</template>
