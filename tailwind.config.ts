import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'xs': '376px',
				'md-xs': '670px',
				'md': '769px',
				'lg': '1025px',
				'pc': '1660px',
			},
			colors: {
				'bg': '#232323',

				'absolute/100': '#fff',
				'border': 'rgba(111,111,111, .15)',
				'absolute/800': '#2E2E2E',
				'absolute/700': '#444444',

				'blue/400': '#924FFF',
				'blue/500': '#6A1EE6',
				'green/400': '#00AF3C',
				'red': '#FF2E00',

				'tone/200': '#333333',
			},
		},
	},
	plugins: [],
};
export default config;
