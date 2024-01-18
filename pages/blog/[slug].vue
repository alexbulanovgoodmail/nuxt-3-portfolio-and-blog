<script setup lang="ts">
const route = useRoute()
</script>

<template>
	<div>Blog {{ route.params.slug }}</div>
</template>
