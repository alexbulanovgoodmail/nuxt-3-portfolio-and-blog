<script setup lang="ts">
const route = useRoute()

useHead({
	title: `${route.params.slug}`
})
</script>

<template>
	<div>
		<div class="container">
			<article class="prose dark:prose-invert">
				<ContentDoc />
			</article>
		</div>
	</div>
</template>
