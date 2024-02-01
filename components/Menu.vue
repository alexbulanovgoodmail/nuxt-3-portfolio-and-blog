<script setup lang="ts"></script>

<template>
	<div class="menu">
		<nav>
			<ul class="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
				<li>
					<NuxtLink class="nav-link" to="/">Главная</NuxtLink>
				</li>
				<li>
					<NuxtLink class="nav-link" to="/about">Обо Мне</NuxtLink>
				</li>
				<li>
					<NuxtLink class="nav-link" to="/projects">Проекты</NuxtLink>
				</li>
				<li>
					<NuxtLink class="nav-link" to="/blog">Блог</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
.nav-link {
	@apply p-2 text-2xl hover:bg-gray-200 dark:hover:bg-gray-800 md:text-base;
}
</style>
