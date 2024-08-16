import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '480px',
				md: '768px',
				lg: '1024px',
				pc: '1328px',
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
	plugins: [],
};
export default config;
