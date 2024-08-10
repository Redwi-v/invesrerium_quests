import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'xs': '375px',
				'md-xs': '670px',
				'md': '768px',
				'lg': '1024px',
				'pc': '1296px',
			},
			colors: {
				'bg': '#232323',

				'absolute/100': '#fff',
				'border': 'rgba(255,255,255, .07)',
				'absolute/900': '#050505',
				'absolute/800': '#2E2E2E',
				'absolute/700': '#444444',

				'blue/400': '#924FFF',
				'blue/500': '#6A1EE6',
				'green/400': '#00AF3C',
				'green/500': '#00872E',
				'red': '#FF2E00',

				'tone/200': '#333333',
			},
		},
	},
	plugins: [],
};
export default config;
