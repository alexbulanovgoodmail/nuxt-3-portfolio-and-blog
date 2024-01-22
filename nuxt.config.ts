// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

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
