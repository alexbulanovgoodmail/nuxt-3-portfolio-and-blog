<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
	queryContent('/blog')
		.where({ _path: { $ne: '/blog' } })
		.only(['_path', 'title'])
		.find()
)
</script>

<template>
	<div class="not-prose font-mono">
		<div class="column text-sm text-gray-400">
			<div>date</div>
			<div>title</div>
		</div>
		<ul>
			<li v-for="post in posts" :key="post._path">
				<NuxtLink class="column hover:bg-gray-100 dark:hover:bg-gray-800" :to="post._path">
					<div class="text-gray-500">2023</div>
					<div>{{ post.title }}</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.column {
	@apply border-b border-gray-200 flex items-center space-x-8 py-2 dark:border-gray-700;
}
</style>
