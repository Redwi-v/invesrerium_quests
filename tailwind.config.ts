import type {Config} from "tailwindcss";

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
                    DEFAULT: '0.75rem',
                    sm: '1rem',
                },
            },
            screens: {
                sm: '480px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px',
            },

            colors: {
                'bg': '#232323',

                'border': 'rgba(255,255,255, .07)',

                'tone/100': '#000',
                'tone/200': 'rgba(255,255,255, .07)',
                'tone/300': 'rgba(255,255,255, .15)',
                'tone/400': 'rgba(255,255,255, .49)',
                'tone/500': 'rgba(255,255,255, .72)',
                'tone/600': 'rgba(255,255,255, .89)',
                'tone/700': 'rgba(255,255,255, .94)',
                'tone/800': 'rgba(255,255,255, .96)',
                'tone/900': '#fff',

                'absolute/100': '#fff',
                'absolute/200': '#F0F0F0',
                'absolute/300': '#E3E3E3',
                'absolute/400': '#B8B8B8',
                'absolute/500': '#959595',
                'absolute/600': '#717171',
                'absolute/700': '#444444',
                'absolute/800': '#2E2E2E',
                'absolute/900': '#050505',

                'blue/400': '#924FFF',
                'blue/500': '#6A1EE6',
                'blue/600': '#4D09BB',

                'green/100': 'rgba(0, 175, 60, .1)',
                'green/200': 'rgba(0, 175, 60, .2)',
                'green/300': 'rgba(0, 175, 60, .35)',
                'green/400': '#00AF3C',
                'green/500': '#00872E',
                'green/600': '#006723',

                'red/400': '#FF2E00',
                'red/500': '#DA2700',
                'red/600': '#BB2200',
            },

            fontSize: {
                '7xl': [
                    '4.5rem', // 72px
                    {
                        lineHeight: '5.625rem', // 90px
                        letterSpacing: '-0.025em',
                        fontWeight: '500',
                    }
                ],
                '6xl': [
                    '3.75rem', // 60px
                    {
                        lineHeight: '4.5rem', // 72px
                        letterSpacing: '-0.025em',
                        fontWeight: '500',
                    }
                ],
                '5xl': [
                    '3rem', // 48px
                    {
                        lineHeight: '3.75rem', // 60px
                        letterSpacing: '-0.025em',
                        fontWeight: '500',
                    }
                ],
                '4xl': [
                    '2.25rem', // 36px
                    {
                        lineHeight: '2.75rem', // 44px
                        letterSpacing: '-0.025em',
                        fontWeight: '500',
                    }
                ],
                '3xl': [
                    '1.875rem', // 30px
                    {
                        lineHeight: '2.5rem', // 40px
                        fontWeight: '500',
                    }
                ],
                '2xl': [
                    '1.5rem', // 24px
                    {
                        lineHeight: '2rem', // 32px
                        fontWeight: '500',
                    }
                ],
                'xl': [
                    '1.25rem', // 20px
                    {
                        lineHeight: '1.75rem', // 28px
                        fontWeight: '500',
                    }
                ],
                'lg': [
                    '1.125rem', // 18px
                    {
                        lineHeight: '1.625rem', // 26px
                        fontWeight: '500',
                    }
                ],
                'base': [
                    '1rem', // 16px
                    {
                        lineHeight: '1.5rem', // 24px
                        fontWeight: '500',
                    }
                ],
                'sm': [
                    '0.875rem', // 14px
                    {
                        lineHeight: '1.25rem', // 20px
                        fontWeight: '500',
                    }
                ],
                'xs': [
                    '0.75rem', // 12px
                    {
                        lineHeight: '1rem', // 16px
                        fontWeight: '500',
                    }
                ],
            },
        },
    },
    plugins: [
        // @ts-ignore
        function ({addComponents, theme}) {
            addComponents({
                '.container': {
                    '@screen sm': {
                        maxWidth: '480px',
                    },
                    '@screen md': {
                        maxWidth: '752px',
                    },
                    '@screen lg': {
                        maxWidth: '960px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1330px',
                    },
                },

                '.grid': {
                    gridTemplateColumns: theme('gridTemplateColumns.12'),
                    gap: theme('gap.3'),
                    '@screen sm': {
                        gap: theme('gap.6'),
                    },
                },
            });
        },
    ],
};
export default config;
