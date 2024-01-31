<script setup lang="ts"></script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
.page-enter-active {
	transition:
		filter 0.25s ease,
		opacity 0.25s ease;
}

.page-leave-active {
	transition:
		filter 0.25s ease,
		opacity 0.25s ease 0.15s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: grayscale(1);
}
</style>
