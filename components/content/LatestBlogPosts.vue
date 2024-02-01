<script setup lang="ts">
interface Props {
	limit?: number | string
}

defineProps<Props>()
</script>

<template>
	<BlogPosts v-slot="{ posts }" :limit="limit">
		<div v-for="post in posts" :key="post.id">
			<NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
		</div>
	</BlogPosts>
</template>
