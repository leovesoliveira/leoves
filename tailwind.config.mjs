/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
				'handwritten': ['"Playwrite AU SA"', 'serif'],
      },
		},
	},
	plugins: [],
}
