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
	<div class="container">
		<div>Index Page</div>
	</div>
</template>
