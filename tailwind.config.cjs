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
		container: ({ theme }) => ({
			center: true,
			padding: '2rem',
			screens: {
				md: theme('screens.sm'),
				lg: theme('screens.md'),
				xl: theme('screens.lg'),
				'2xl': theme('screens.xl'),
			},
		}),
	},
	plugins: [],
}
