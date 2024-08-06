import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '376px',
				md: '769px',
				lg: '1025px',
				pc: '1660px',
			},
			colors: {
				'bg': '#232323',

				'absolute/100': '#fff',
				'border': 'rgba(111,111,111, .15)',
				'absolute/800': '#2E2E2E',
				'absolute/700': '#444444',

				'blue/400': '#924FFF',
				'green/400': '#00AF3C',

				'tone/200': '#333333',
			},
		},
	},
	plugins: [],
};
export default config;
