<script setup lang="ts">
useHead({
	title: 'Обо мне'
})

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
