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
				class="prose dark:prose-invert prose-pre:text-gray-700 prose-pre:bg-white dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300"
			>
				<ContentDoc />
			</article>
		</div>
	</div>
</template>
