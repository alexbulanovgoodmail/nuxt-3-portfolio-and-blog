<script setup lang="ts">
useHead({
	titleTemplate: '%s - Блог и портфолио'
})

const colorMode = useColorMode()

console.log(colorMode.preference)

colorMode.preference = 'dark'
</script>

<template>
	<div>
		<Header />

		<main class="mt-10">
			<slot />
		</main>
	</div>
</template>

<style>
body {
	@apply bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300;
}
</style>
