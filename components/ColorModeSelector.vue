<script setup lang="ts">
const colorMode = useColorMode()
const modes = ['system', 'light', 'dark']
const nextModeIcons = {
	system: '🌓',
	light: '🌕',
	dark: '🌑'
}

const nextMode = computed(() => {
	const currentModeIndex = modes.indexOf(colorMode.preference)
	let nextModeIndex: null | number = null

	if (currentModeIndex + 1 === modes.length) {
		nextModeIndex = 0
	} else {
		nextModeIndex = currentModeIndex + 1
	}

	return modes[nextModeIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value as keyof Object])
const showNextModeLabel = ref<boolean>(false)

const toggleMode = () => (colorMode.preference = nextMode.value)
</script>

<template>
	<ClientOnly>
		<div class="flex items-center space-x-2">
			<span v-if="showNextModeLabel" class="text-xs text-gray-500 dark:text-gray-300"
				>Изменить режим на {{ nextMode }}</span
			>
			<button
				class="p-2 hover:bg-gray-100 dark:hover:bg-gray-400"
				type="button"
				@click="toggleMode"
				@mouseenter="showNextModeLabel = true"
				@mouseleave="showNextModeLabel = false"
			>
				<span class="flex items-center"> {{ nextModeIcon }} </span>
			</button>
		</div>
	</ClientOnly>
</template>
