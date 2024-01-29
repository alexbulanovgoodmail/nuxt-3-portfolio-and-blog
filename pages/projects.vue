<script setup lang="ts">
useHead({
	title: 'Проекты'
})
</script>

<template>
	<div>
		<div class="container">
			<article class="prose max-w-none dark:prose-invert prose-h1:text-red-400">
				<ContentDoc path="/projects" />
			</article>
		</div>
	</div>
</template>
