<script setup lang="ts">
const { data, error } = await useFetch('https://api.github.com/users/piotr-jura-udemy/repos')

const repos = computed(() =>
	data.value.filter((repo: any) => repo.description).sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
)
</script>

<template>
	<div class="not-prose">
		<div v-if="error">Something went wrong... Try again!</div>
		<div v-else>
			<ul class="grid grid-cols-1 gap-4">
				<li
					v-for="repository in repos"
					:key="repository.id"
					class="border border-gray-200 rounded-sm p-4 font-mono dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
				>
					<a :href="repository.html_url" target="_blank">
						<span class="flex items-center justify-between text-sm">
							<span class="font-semibold">{{ repository.name }}</span>
							<span>{{ repository.stargazers_count }} ★</span>
						</span>
						<span class="text-sm">
							{{ repository.description }}
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
