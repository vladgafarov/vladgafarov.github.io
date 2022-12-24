/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2CB67D',
				['primary-dark']: '#196545',
				secondary: '#5A2BEC',
				dark: '#131316',
			},
		},
	},
	plugins: [],
}
