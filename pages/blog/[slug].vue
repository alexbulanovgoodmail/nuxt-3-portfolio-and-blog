<script setup lang="ts">
const route = useRoute()

useHead({
	title: `${route.params.slug}`
})
</script>

<template>
	<div>Blog {{ route.params.slug }}</div>
</template>
