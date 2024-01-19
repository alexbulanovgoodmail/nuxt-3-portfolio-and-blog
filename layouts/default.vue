<script setup lang="ts">
useHead({
	titleTemplate: '%s - Блог и портфолио'
})
</script>

<template>
	<div>
		<Header />
		<slot />
	</div>
</template>
