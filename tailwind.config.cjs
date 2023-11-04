/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		corePlugins: {
			preflight: false
		},
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
				'4/4': '4 / 4',
				'3/2': '3 / 2'
			}
		},
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9'
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		colors: {
			primary: '#0735d7',
			current: 'currentColor',
			transparent: 'transparent',
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
			neutral: {
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
		spacing: {
			px: '1px',
			0: '0px',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			18: '4.5rem',
			20: '5rem',
			24: '6rem',
			26: '6.5rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem',
			100: '25rem',
			112: '28rem',
			118: '29.5rem',
			135: '33.75rem',
			142: '35.5rem',
			150: '37.5rem',
			166: '41.75rem',
			200: '50rem'
		},
		animation: {
			none: 'none',
			spin: 'spin 1s linear infinite',
			spinSlow: 'spin 15s linear infinite',
			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			bounce: 'bounce 1s infinite',
			bounceSlow: 'bounceSlow 5s infinite',
			moving: 'moving 20s linear infinite'
		},
		backdropBlur: (theme) => theme('blur'),
		backdropBrightness: (theme) => theme('brightness'),
		backdropContrast: (theme) => theme('contrast'),
		backdropGrayscale: (theme) => theme('grayscale'),
		backdropHueRotate: (theme) => theme('hueRotate'),
		backdropInvert: (theme) => theme('invert'),
		backdropOpacity: (theme) => theme('opacity'),
		backdropSaturate: (theme) => theme('saturate'),
		backdropSepia: (theme) => theme('sepia'),
		backgroundColor: (theme) => ({
			...theme('colors'),
			body: '#fff'
		}),
		backgroundImage: {
			none: 'none',
			'gradient-to-t':
				'linear-gradient(to top, var(--tw-gradient-stops))',
			'gradient-to-tr':
				'linear-gradient(to top right, var(--tw-gradient-stops))',
			'gradient-to-r':
				'linear-gradient(to right, var(--tw-gradient-stops))',
			'gradient-to-br':
				'linear-gradient(to bottom right, var(--tw-gradient-stops))',
			'gradient-to-b':
				'linear-gradient(to bottom, var(--tw-gradient-stops))',
			'gradient-to-bl':
				'linear-gradient(to bottom left, var(--tw-gradient-stops))',
			'gradient-to-l':
				'linear-gradient(to left, var(--tw-gradient-stops))',
			'gradient-to-tl':
				'linear-gradient(to top left, var(--tw-gradient-stops))',
			'gradient-white':
				'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
			'gradient-black':
				'linear-gradient(0deg, #07070E 0%, rgba(0, 0, 0, 0) 100%)',
			'gradient-gotham':
				'radial-gradient(at right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
			'gradient-bluemesh':
				'radial-gradient(at 6% 100%, rgb(55, 48, 163) 0, transparent 69%), radial-gradient(at 33% 28%, rgb(30, 58, 138) 0, transparent 58%), radial-gradient(at 34% 60%, rgb(192, 132, 252) 0, transparent 60%), radial-gradient(at 24% 81%, rgb(126, 34, 206) 0, transparent 18%), radial-gradient(at 32% 96%, rgb(124, 58, 237) 0, transparent 7%), radial-gradient(at 65% 97%, rgb(30, 64, 175) 0, transparent 76%)',
			'gradient-night':
				'linear-gradient(rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))'
		},
		backgroundOpacity: (theme) => theme('opacity'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top'
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain'
		},
		blur: {
			0: '0',
			none: '0',
			sm: '4px',
			DEFAULT: '8px',
			md: '12px',
			lg: '16px',
			xl: '24px',
			'2xl': '40px',
			'3xl': '64px'
		},
		brightness: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
			200: '2'
		},
		borderColor: (theme) => ({
			...theme('colors'),
			DEFAULT: '#e5e7eb'
		}),
		borderOpacity: (theme) => theme('opacity'),
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1.0rem',
			'3xl': '1.25rem',
			'4xl': '1.5rem',
			'5xl': '2.0rem',
			full: '9999px'
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
			3: '3px',
			4: '4px',
			8: '8px'
		},
		boxShadow: {
			sm: '0px 2px 2px rgba(0, 0, 0, 0.06);',
			DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.06);',
			md: '0px 6px 6px rgba(0, 0, 0, 0.06);',
			lg: '0px 8px 8px rgba(0, 0, 0, 0.06)',
			xl: '0px 10px 10px rgba(0, 0, 0, 0.06)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none'
		},
		caretColor: (theme) => theme('colors'),
		contrast: {
			0: '0',
			50: '.5',
			75: '.75',
			100: '1',
			125: '1.25',
			150: '1.5',
			200: '2'
		},
		container: { width: '100%' },
		cursor: {
			auto: 'auto',
			DEFAULT: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			'not-allowed': 'not-allowed'
		},
		divideColor: (theme) => theme('borderColor'),
		divideOpacity: (theme) => theme('borderOpacity'),
		divideWidth: (theme) => theme('borderWidth'),
		dropShadow: {
			sm: '0.5px 1px 1px hsl(90deg 60% 50% / 0.7)',
			DEFAULT: [
				'1px 2px 2px hsl(90deg 60% 50% / 0.333)',
				'2px 2px 2px hsl(90deg 60% 50% / 0.333)',
				'3px 6px 6px hsl(90deg 60% 50% / 0.333)'
			],
			md: [
				'1px 2px 2px hsl(90deg 60% 50% / 0.2)',
				'2px 4px 4px hsl(90deg 60% 50% / 0.2)',
				'4px 8px 8px hsl(90deg 60% 50% / 0.2)',
				'8px 16px 16px hsl(90deg 60% 50% / 0.2)'
			],
			lg: [
				'0 10px 8px rgba(0, 0, 0, 0.04)',
				'0 4px 3px rgba(0, 0, 0, 0.1)'
			],
			xl: [
				'0 20px 13px rgba(0, 0, 0, 0.03)',
				'0 8px 5px rgba(0, 0, 0, 0.08)'
			],
			'2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
			none: '0 0 #0000'
		},
		fill: {
			current: 'currentColor'
		},
		grayscale: {
			0: '0',
			DEFAULT: '100%'
		},
		hueRotate: {
			'-180': '-180deg',
			'-90': '-90deg',
			'-60': '-60deg',
			'-30': '-30deg',
			'-15': '-15deg',
			0: '0deg',
			15: '15deg',
			30: '30deg',
			60: '60deg',
			90: '90deg',
			180: '180deg'
		},
		invert: {
			0: '0',
			DEFAULT: '100%'
		},
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none'
		},
		flexGrow: {
			0: '0',
			DEFAULT: '1'
		},
		flexShrink: {
			0: '0',
			DEFAULT: '1'
		},
		fontFamily: {
			body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			heading:
				'"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			subheading:
				'"Rajdhani", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			spaceg:
				'"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
		},
		fontSize: {
			// xs: ['0.75rem', { lineHeight: '1' }],
			// sm: ['0.875rem', { lineHeight: '1.0rem' }],
			// base: ['1rem', { lineHeight: '16px' }],
			// lg: ['1.125rem', { lineHeight: '1.2rem' }],
			// 	xl: ['1.25rem', { lineHeight: '1.3' }],
			// '2xl': ['1.625rem', { lineHeight: '1.3' }],
			// '3xl': ['2rem', { lineHeight: '1.3' }],
			// '4xl': ['2.625rem', { lineHeight: '1' }],
			// 	'5xl': ['3rem', { lineHeight: '1' }],
			// 	'6xl': ['3.5rem', { lineHeight: '1' }],
			// 	'7xl': ['3.875rem', { lineHeight: '1' }],
			// 	'8xl': ['4.5rem', { lineHeight: '1' }],
			// 	'9xl': ['5rem', { lineHeight: '1' }],
			// '10xl': ['5.5rem', { lineHeight: '1' }],
			// '11xl': ['6rem', { lineHeight: '1' }],
			// 	'12xl': ['8.25rem', { lineHeight: '1' }],
			// 	'13xl': ['9rem', { lineHeight: '1' }],
			// 	'14xl': ['10rem', { lineHeight: '1' }]
		},
		fontWeight: {
			thin: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800'
		},
		gap: (theme) => theme('spacing'),
		gradientColorStops: (theme) => theme('colors'),
		gridAutoColumns: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)'
		},
		gridAutoRows: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)'
		},
		gridColumn: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-7': 'span 7 / span 7',
			'span-8': 'span 8 / span 8',
			'span-9': 'span 9 / span 9',
			'span-10': 'span 10 / span 10',
			'span-11': 'span 11 / span 11',
			'span-12': 'span 12 / span 12',
			'span-full': '1 / -1'
		},
		gridColumnEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13'
		},
		gridColumnStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13'
		},
		gridRow: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-full': '1 / -1'
		},
		gridRowStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7'
		},
		gridRowEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7'
		},
		gridTemplateColumns: {
			none: 'none',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))',
			7: 'repeat(7, minmax(0, 1fr))',
			8: 'repeat(8, minmax(0, 1fr))',
			9: 'repeat(9, minmax(0, 1fr))',
			10: 'repeat(10, minmax(0, 1fr))',
			11: 'repeat(11, minmax(0, 1fr))',
			12: 'repeat(12, minmax(0, 1fr))'
		},
		gridTemplateRows: {
			none: 'none',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))'
		},
		height: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%',
			screen: '100vh'
		}),
		inset: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing')),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%',
			'-1/2': '-50%',
			'-1/3': '-33.333333%',
			'-2/3': '-66.666667%',
			'-1/4': '-25%',
			'-2/4': '-50%',
			'-3/4': '-75%',
			'-full': '-100%'
		}),
		keyframes: {
			spin: {
				to: {
					transform: 'rotate(360deg)'
				}
			},
			spinSlow: {
				to: {
					transform: 'rotate(360deg)'
				}
			},
			ping: {
				'75%, 100%': {
					transform: 'scale(2)',
					opacity: '0'
				}
			},
			pulse: {
				'50%': {
					opacity: '.5'
				}
			},
			bounce: {
				'0%, 100%': {
					transform: 'translateY(-25%)',
					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
				},
				'50%': {
					transform: 'none',
					animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
				}
			},
			bounceSlow: {
				'0%, 100%': {
					transform: 'none',
					animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
				},
				'50%': {
					transform: 'translateY(25%)',
					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
				}
			},
			moving: {
				'0%, 100%': {
					transform: 'translateX(0)'
				},
				'50%': {
					transform: 'translateX(-15%)'
				}
			}
		},
		letterSpacing: {
			tightest: '-0.05em',
			tighter: '-0.04em',
			tight: '-0.02em',
			normal: '0em',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em'
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
			3: '.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem'
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal'
		},
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing'))
		}),
		maxHeight: {
			full: '100%',
			screen: '100vh'
		},
		maxWidth: {
			none: 'none',
			0: '0rem',
			'2xs': '18rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			'8xl': '87rem',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			prose: '65ch'
		},
		minHeight: {
			0: '0',
			full: '100%',
			screen: '100vh'
		},
		minWidth: {
			0: '0',
			full: '100%',
			min: 'min-content',
			max: 'max-content'
		},
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top'
		},
		opacity: {
			0: '0',
			5: '0.05',
			10: '0.1',
			20: '0.2',
			25: '0.25',
			30: '0.3',
			40: '0.4',
			50: '0.5',
			60: '0.6',
			70: '0.7',
			75: '0.75',
			80: '0.8',
			90: '0.9',
			95: '0.95',
			100: '1'
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12'
		},
		outline: {
			none: ['2px solid transparent', '2px'],
			white: ['2px dotted white', '2px'],
			black: ['2px dotted black', '2px']
		},
		padding: (theme) => theme('spacing'),
		placeholderColor: (theme) => theme('colors'),
		placeholderOpacity: (theme) => theme('opacity'),
		ringColor: (theme) => ({
			DEFAULT: theme('colors.blue.500', '#3b82f6'),
			...theme('colors')
		}),
		ringOffsetColor: (theme) => theme('colors'),
		ringOffsetWidth: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		ringOpacity: (theme) => ({
			DEFAULT: '0.5',
			...theme('opacity')
		}),
		ringWidth: {
			DEFAULT: '3px',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		rotate: {
			'-180': '-180deg',
			'-90': '-90deg',
			'-45': '-45deg',
			'-12': '-12deg',
			'-6': '-6deg',
			'-3': '-3deg',
			'-2': '-2deg',
			'-1': '-1deg',
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg',
			45: '45deg',
			90: '90deg',
			180: '180deg'
		},
		saturate: {
			0: '0',
			50: '.5',
			100: '1',
			150: '1.5',
			200: '2'
		},
		scale: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5'
		},
		sepia: {
			0: '0',
			DEFAULT: '100%'
		},
		skew: {
			'-12': '-12deg',
			'-6': '-6deg',
			'-3': '-3deg',
			'-2': '-2deg',
			'-1': '-1deg',
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg'
		},
		space: (theme, { negative }) => ({
			...theme('spacing'),
			...negative(theme('spacing'))
		}),
		stroke: {
			current: 'currentColor'
		},
		textColor: (theme) => ({
			...theme('colors'),
			body: '#000'
		}),
		textOpacity: (theme) => theme('opacity'),
		transformOrigin: {
			center: 'center',
			top: 'top',
			'top-right': 'top right',
			right: 'right',
			'bottom-right': 'bottom right',
			bottom: 'bottom',
			'bottom-left': 'bottom left',
			left: 'left',
			'top-left': 'top left'
		},
		transitionDelay: {
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms'
		},
		transitionDuration: {
			DEFAULT: '150ms',
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms'
		},
		transitionProperty: {
			none: 'none',
			all: 'all',
			DEFAULT:
				'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			colors: 'background-color, border-color, color, fill, stroke',
			opacity: 'opacity',
			shadow: 'box-shadow',
			transform: 'transform'
		},
		transitionTimingFunction: {
			DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
			linear: 'linear',
			in: 'cubic-bezier(0.4, 0, 1, 1)',
			out: 'cubic-bezier(0, 0, 0.2, 1)',
			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
		},
		translate: (theme, { negative }) => ({
			...theme('spacing'),
			...negative(theme('spacing')),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%',
			'-1/2': '-50%',
			'-1/3': '-33.333333%',
			'-2/3': '-66.666667%',
			'-1/4': '-25%',
			'-2/4': '-50%',
			'-3/4': '-75%',
			'-full': '-100%'
		}),
		width: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw'
		}),
		zIndex: {
			auto: 'auto',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50'
		}
	},
	variantOrder: [
		'first',
		'last',
		'odd',
		'even',
		'visited',
		'checked',
		'group-hover',
		'group-focus',
		'focus-within',
		'hover',
		'focus',
		'focus-visible',
		'active',
		'disabled'
	],
	variants: {
		accessibility: ['responsive', 'focus-within', 'focus'],
		alignContent: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		animation: ['responsive'],
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundClip: ['responsive'],
		backgroundColor: [
			'responsive',
			'dark',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		backgroundImage: ['responsive'],
		backgroundOpacity: [
			'responsive',
			'dark',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		blur: ['hover', 'group-hover', 'focus'],
		backdropBlur: ['hover', 'group-hover', 'focus'],
		borderCollapse: ['responsive'],
		borderColor: [
			'responsive',
			'dark',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		borderOpacity: [
			'responsive',
			'dark',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidth: ['responsive'],
		boxShadow: [
			'responsive',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		boxSizing: ['responsive'],
		clear: ['responsive'],
		container: ['responsive'],
		cursor: ['responsive'],
		display: ['responsive', 'hover', 'group-hover'],
		divideColor: ['responsive', 'dark'],
		divideOpacity: ['responsive', 'dark'],
		divideStyle: ['responsive'],
		divideWidth: ['responsive'],
		fill: ['responsive'],
		filter: ['hover', 'group-hover', 'focus'],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		flexWrap: ['responsive'],
		fluidType: ['responsive'],
		float: ['responsive'],
		fontFamily: ['responsive'],
		fontSize: ['responsive'],
		fontSmoothing: ['responsive'],
		fontStyle: ['responsive'],
		fontVariantNumeric: ['responsive'],
		fontWeight: ['responsive'],
		gap: ['responsive'],
		gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
		gridAutoColumns: ['responsive'],
		gridAutoFlow: ['responsive'],
		gridAutoRows: ['responsive'],
		gridColumn: ['responsive'],
		gridColumnEnd: ['responsive'],
		gridColumnStart: ['responsive'],
		gridRow: ['responsive'],
		gridRowEnd: ['responsive'],
		gridRowStart: ['responsive'],
		gridTemplateColumns: ['responsive'],
		gridTemplateRows: ['responsive'],
		height: ['responsive', 'hover', 'group-hover'],
		inset: ['responsive'],
		justifyContent: ['responsive'],
		justifyItems: ['responsive'],
		justifySelf: ['responsive'],
		letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: ['responsive'],
		listStyleType: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		objectFit: ['responsive'],
		objectPosition: ['responsive'],
		opacity: [
			'responsive',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		order: ['responsive'],
		outline: ['responsive', 'focus-within', 'focus'],
		overflow: ['responsive'],
		overscrollBehavior: ['responsive'],
		padding: ['responsive'],
		placeContent: ['responsive'],
		placeItems: ['responsive'],
		placeSelf: ['responsive'],
		placeholderColor: ['responsive', 'dark', 'focus'],
		placeholderOpacity: ['responsive', 'dark', 'focus'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
		ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
		ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
		ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
		ringWidth: ['responsive', 'focus-within', 'focus'],
		rotate: ['responsive', 'hover', 'group-hover', 'focus'],
		scale: ['responsive', 'hover', 'group-hover', 'focus'],
		skew: ['responsive', 'hover', 'focus'],
		space: ['responsive', 'hover', 'group-hover'],
		stroke: ['responsive'],
		strokeWidth: ['responsive'],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColor: [
			'responsive',
			'dark',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		textDecoration: [
			'responsive',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		textOpacity: [
			'responsive',
			'dark',
			'group-hover',
			'focus-within',
			'hover',
			'focus'
		],
		textOverflow: ['responsive'],
		textTransform: ['responsive'],
		transform: ['responsive', 'group-hover'],
		transformOrigin: ['responsive'],
		transitionDelay: ['responsive'],
		transitionDuration: ['responsive'],
		transitionProperty: ['responsive'],
		transitionTimingFunction: ['responsive'],
		translate: ['responsive', 'hover', 'focus', 'group-hover'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		wordBreak: ['responsive'],
		zIndex: ['responsive', 'focus-within', 'focus']
	},
	corePlugins: {},
	plugins: [
		require('tailwindcss-fluid-type')({
			// your fluid type settings
			// works only with unitless numbers
			// This numbers are the defaults settings
			settings: {
				fontSizeMin: 1.125, // 1.125rem === 18px
				fontSizeMax: 1.25, // 1.25rem === 20px
				ratioMin: 1.125, // Multiplicator Min
				ratioMax: 1.2, // Multiplicator Max
				screenMin: 20, // 20rem === 320px
				screenMax: 96, // 96rem === 1536px
				unit: 'rem', // default is rem but it's also possible to use 'px'
				prefix: '', // set a prefix to use it alongside the default font sizes
				extendValues: false // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
			},
			// Creates the text-xx classes
			// This are the default settings and analog to the tailwindcss defaults
			// Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
			values: {
				xxs: [-3, 1.2],
				xs: [-2, 1.6],
				sm: [-1, 1.6],
				base: [
					0,
					{
						lineHeight: 1.6,
						letterSpacing: '0rem'
					}
				],
				subhead: [
					0,
					{
						lineHeight: 1.6,
						letterSpacing: '0.1rem'
					}
				],
				lg: [
					1,
					{
						lineHeight: 1.6,
						letterSpacing: '0rem'
					}
				],
				xl: [
					2,
					{
						lineHeight: 1.2,
						letterSpacing: '0rem'
					}
				],
				'2xl': [
					3,
					{
						lineHeight: 1.2,
						letterSpacing: '-0.075rem'
					}
				],
				'3xl': [
					4,
					{
						lineHeight: 1.1,
						letterSpacing: '-0.1rem'
					}
				],
				'4xl': [
					5,
					{
						lineHeight: 1.1,
						letterSpacing: '-0.1rem'
					}
				],
				'5xl': [
					6,
					{
						lineHeight: 1.1,
						letterSpacing: '-0.1rem'
					}
				],
				'6xl': [
					7,
					{
						lineHeight: 1,
						letterSpacing: '-0.1rem'
					}
				],
				'7xl': [
					8,
					{
						lineHeight: 1,
						letterSpacing: '-0.2rem'
					}
				],
				'8xl': [
					9,
					{
						lineHeight: 1,
						letterSpacing: '-0.3rem'
					}
				],
				'9xl': [
					10,
					{
						lineHeight: 1,
						letterSpacing: '-0.4rem'
					}
				],
				'10xl': [
					11,
					{
						lineHeight: 1,
						letterSpacing: '-0.5rem'
					}
				],
				'11xl': [
					12,
					{
						lineHeight: 1,
						letterSpacing: '-0.5rem'
					}
				],
				'12xl': [
					13,
					{
						lineHeight: 1,
						letterSpacing: '-0.5rem'
					}
				]
			}
		}),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries')
	]
};

module.exports = config;
