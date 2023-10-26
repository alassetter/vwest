/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1370px'
		},
		colors: {
			black: '#000',
			white: '#fff',
			gray: {
				50: '#f8fafc',
				100: '#f1f5f9',
				200: '#e2e8f0',
				300: '#cbd5e1',
				400: '#94a3b8',
				500: '#64748b',
				600: '#475569',
				700: '#334155',
				800: '#1e293b',
				900: '#0f172a'
			},
			coolGray: {
				50: '#F7F7F7',
				100: '#EFEFEF',
				200: '#E9E9E9',
				300: '#D8D8D8',
				400: '#CACACA',
				500: '#A5A5A5',
				600: '#646464',
				700: '#494949',
				800: '#252525',
				900: '#151515'
			},
			red: {
				50: '#ffebeb',
				100: '#ffc3c3',
				200: '#E9E9E9',
				300: '#ff9c9c',
				400: '#ff7575',
				500: '#ff3a3a',
				600: '#e53434',
				700: '#b22828',
				800: '#7f1d1d',
				900: '#4c1111'
			},
			yellow: {
				50: '#fffbeb',
				100: '#fef3c7',
				200: '#fde68a',
				300: '#fcd34d',
				400: '#fbbf24',
				500: '#f59e0b',
				600: '#d97706',
				700: '#b45309',
				800: '#92400e',
				900: '#78350f'
			},
			green: {
				50: '#e7f7ec',
				100: '#cfefda',
				200: '#b7e8c7',
				300: '#d3f3ef',
				400: '#88d9a3',
				500: '#12b347',
				600: '#0e8f38',
				700: '#0a6b2a',
				800: '#07471c',
				900: '#124226'
			},
			blue: {
				50: '#e6ebfd',
				100: '#b4c4fa',
				200: '#839df7',
				300: '#5275f3',
				400: '#204ef0',
				500: '#083bef',
				600: '#0735d7',
				700: '#0529a7',
				800: '#041d77',
				900: '#021147'
			}
		},
		fontFamily: {
			body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			heading:
				'"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			spaceg:
				'"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
		},
		fontWeight: {
			thin: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800'
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries')
	]
};

module.exports = config;
