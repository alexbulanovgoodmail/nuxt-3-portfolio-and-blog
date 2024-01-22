<script setup lang="ts">
useHead({
	titleTemplate: '%s - Блог и портфолио'
})
</script>

<template>
	<div>
		<Header />

		<main class="mt-10">
			<slot />
		</main>
	</div>
</template>
