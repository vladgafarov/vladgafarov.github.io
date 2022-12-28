const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2CB67D',
				['primary-darker']: '#196545',
				secondary: '#5A2BEC',
				dark: '#131316',
			},
			fontFamily: {
				sans: ['Karla', ...defaultTheme.fontFamily.sans],
				montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
				karla: ['Karla', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
