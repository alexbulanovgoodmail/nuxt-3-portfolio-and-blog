<script setup lang="ts"></script>

<template>
	<header class="header">
		<div class="container">
			<div class="flex items-start justify-between py-4 md:items-center">
				<div class="flex items-center md:space-x-12">
					<NuxtLink class="hidden p-2 text-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 md:block" to="/"
						>Logo .</NuxtLink
					>
					<Menu />
				</div>
				<ColorModeSelector />
			</div>
		</div>
	</header>
</template>
