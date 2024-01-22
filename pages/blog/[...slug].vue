<script setup lang="ts">
const route = useRoute()

useHead({
	title: `${route.params.slug}`
})
</script>

<template>
	<div>
		<div class="container">
			<article>
				<ContentDoc />
			</article>
		</div>
	</div>
</template>
