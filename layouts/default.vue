<script setup lang="ts"></script>

<template>
	<div>
		<header class="header">
			<div class="container">
				<div class="flex items-center space-x-4">
					<NuxtLink to="/" class="p-2 text-xl font-semibold hover:bg-gray-200">Alex.Bulanov</NuxtLink>

					<nav>
						<ul class="flex items-center space-x-4">
							<li>
								<NuxtLink to="/">Home</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/about">About</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/blog">Blog</NuxtLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<slot />
	</div>
</template>
