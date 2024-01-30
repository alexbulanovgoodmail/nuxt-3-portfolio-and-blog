<script setup lang="js">
defineProps({ error: Object })
</script>

<template>
	<NuxtLayout>
		<div class="text-center">
			<h1>Error: {{ error.statusCode }}</h1>
			<p>{{ error.statusMessage }}</p>
			{{ error }}
		</div>
	</NuxtLayout>
</template>
