<script setup lang="ts">
const { data, error } = await useFetch('https://api.github.com/users/piotr-jura-udemy/repos')
</script>

<template>
	<div>
		<div v-if="error">Something went wrong... Try again!</div>
		<div v-else>
			{{ data }}
		</div>
	</div>
</template>
