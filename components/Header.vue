<script setup lang="ts"></script>

<template>
	<header class="header">
		<div class="container">
			<div class="flex items-center justify-between py-4">
				<div class="flex items-center space-x-12">
					<NuxtLink class="p-2 text-xl font-semibold hover:bg-gray-200" to="/">Alex.Bulanov</NuxtLink>
					<Menu />
				</div>
				<ColorModeSelector />
			</div>
		</div>
	</header>
</template>
