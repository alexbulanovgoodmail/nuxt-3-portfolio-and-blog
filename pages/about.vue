<script setup lang="ts">
const enableCustomLayout = () => {
	setPageLayout('another')
}
</script>

<template>
	<div>
		<div>About Page</div>
		<button @click="enableCustomLayout">Update Layout</button>
	</div>
</template>
