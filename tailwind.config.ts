import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		mode: 'jit',
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '12px',
					sm: '16px',
				},
			},

			// screens: {
			// 	xs: '480px',
			// 	md: '768px',
			// 	lg: '1140px',
			// 	pc: '1320px',
			// },
			screens: {
				'sm': '520px',
				'md': '768px',
				'lg': '992px',
				'pc': '1200px',
				'2xl': '1330px',
			},

			colors: {
				'bg': '#232323',

				'black': '#000',
				'absolute/100': '#fff',
				'border': 'rgba(255,255,255, .07)',
				'absolute/900': '#050505',
				'absolute/800': '#2E2E2E',
				'absolute/700': '#444444',

				'blue/400': '#924FFF',
				'blue/500': '#6A1EE6',
				'blue/600': '#4D09BB',
				'green/400': '#00AF3C',
				'green/500': '#00872E',
				'green/600': '#006723',
				'red': '#FF2E00',

				'tone/200': '#333333',
			},
		},
	},
	plugins: [
		// @ts-ignore
		function ({ addComponents, theme }) {
			addComponents({
				'.container': {
					'@screen sm': {
						maxWidth: '480px',
					},
					'@screen md': {
						maxWidth: '720px',
					},
					'@screen lg': {
						maxWidth: '960px',
					},
					'@screen pc': {
						maxWidth: '1140px',
					},
					'@screen 2xl': {
						maxWidth: '1298px',
					},
				},
			});
		},
	],
};
export default config;
