<script setup lang="ts">
const { data } = await useAsyncData('blog-list', () =>
	queryContent('/blog')
		.where({ _path: { $ne: '/blog' } })
		.only(['_path', 'title', 'publishedAt'])
		.sort({ publishedAt: -1 })
		.find()
)

const posts = computed(() => {
	if (!data.value) return []

	const result = []
	let lastYear = null

	for (const post of data.value) {
		const year = new Date(post.publishedAt).getFullYear()
		post.displayYear = year !== lastYear
		post.year = year
		result.push(post)
		lastYear = year
	}

	return result
})
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
					<div
						:class="{
							'text-white dark:text-gray-900': !post.displayYear,
							'text-gray-400 dark:text-gray-500': post.displayYear
						}"
					>
						{{ post.year }}
					</div>
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
