<script setup lang="ts"></script>

<template>
	<div class="menu">
		<nav>
			<ul class="flex items-center space-x-4">
				<li>
					<NuxtLink class="nav-link" to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink class="nav-link" to="/about">About</NuxtLink>
				</li>
				<li>
					<NuxtLink class="nav-link" to="/blog">Blog</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
.nav-link {
	@apply p-2 hover:bg-gray-200;
}
</style>
