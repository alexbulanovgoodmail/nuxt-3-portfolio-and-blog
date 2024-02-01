<script setup lang="ts">
interface Props {
	limit?: number | string
}

const props = defineProps<Props>()

const { data } = await useAsyncData('blog-list', () => {
	const query = queryContent('/blog')
		.where({ _path: { $ne: '/blog' } })
		.only(['_path', 'title', 'publishedAt'])
		.sort({ publishedAt: -1 })

	if (props.limit) {
		query.limit(props.limit)
	}

	return query.find()
})

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
	<div>
		<slot :posts="posts">
			<div class="not-prose font-mono">
				<div class="column text-sm text-gray-400">
					<div>date</div>
					<div>title</div>
				</div>
				<ul>
					<li v-for="post in posts" :key="post._path">
						<NuxtLink class="column group hover:bg-gray-100 dark:hover:bg-gray-800" :to="post._path">
							<div
								:class="{
									'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800':
										!post.displayYear,
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
		</slot>
	</div>
</template>

<style scoped lang="scss">
.column {
	@apply border-b border-gray-200 flex items-center space-x-8 py-2 dark:border-gray-700;
}
</style>
