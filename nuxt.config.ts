// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},

	modules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxt/content'
	],

	content: {
		highlight: {
			theme: {
				// Default theme (same as single string)
				default: 'github-light',
				// Theme used if `html.dark`
				dark: 'github-dark',
				// Theme used if `html.sepia`
				sepia: 'monokai'
			}
		}
	},

	colorMode: {
		classSuffix: ''
	},

	eslint: {
		failOnError: true
	},

	css: ['~/assets/scss/main.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "@/assets/scss/general/variables.scss" as *;
					`
				}
			}
		}
	}
})
