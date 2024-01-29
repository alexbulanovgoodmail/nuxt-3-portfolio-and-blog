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
					{{ doc.body.toc.links }}
					<ContentRenderer :value="doc" />
				</ContentDoc>
			</article>
		</div>
	</div>
</template>
