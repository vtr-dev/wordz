import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '32': 'repeat(32, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-3-auto': 'span 3',
        '2-span-3': '2 / span 3',
        '3-span-3': '3 / span 3',
        '30-span-3': '30 / span 3',
        '25-span-8': '25 / span 8',
      },
      fontSize: {
        'key-base': '1.45em',
        'key-enter': '1.3em',
      },
      lineHeight: {
        'key-base': '1.45em',
        'key-enter': '1.3em',
      },
      colors: {
        'primary-gray': '#6E5C62',
        key: '#4C4347',
      },
    },
  },
  plugins: [],
};
export default config;
