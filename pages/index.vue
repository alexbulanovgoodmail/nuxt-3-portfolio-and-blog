<script setup lang="ts">
useSeoMeta({
	title: 'Главная',
	description: 'Это главная страница сайта',
	ogTitle: 'Главная',
	ogDescription: 'Это главная страница сайта',
	ogImage: '[og:image]',
	ogUrl: '[og:url]',
	twitterTitle: 'Главная',
	twitterDescription: 'Это главная страница сайта',
	twitterImage: '[twitter:image]',
	twitterCard: 'summary'
})

useHead({
	htmlAttrs: {
		lang: 'en'
	},
	link: [
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon.png'
		}
	]
})
</script>

<template>
	<div>
		<div class="container">
			<article class="prose max-w-none dark:prose-invert prose-h1:text-red-400">
				<ContentDoc path="/" />
			</article>
		</div>
	</div>
</template>
