<script setup lang="ts">
interface Props {
	links: any[]
	level?: number
}

withDefaults(defineProps<Props>(), {
	level: () => 0
})

const route = useRoute()
</script>

<template>
	<ul>
		<li v-for="link in links" :key="link.id">
			<NuxtLink :to="{ path: route.path, hash: `#${link.id}` }" :class="{ 'ml-4': level }">
				{{ link.text }}
			</NuxtLink>

			<TocLinks v-if="link.children" :links="link.children" :level="level + 1" />
		</li>
	</ul>
</template>
