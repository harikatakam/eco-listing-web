import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Next.js pages
    './components/**/*.{js,ts,jsx,tsx}', // Next.js components
    './app/**/*.{js,ts,jsx,tsx}', // For Next.js App Directory (if applicable)
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C49FA', // Primary color
          light: '#9BD0F8',   // Light variant
          dark: '#0555C6',    // Darker shade
          medium: '#233E49'
        },
        home: {
          navy: '#022E50', // Used in Home UI
          grey: '#797B81', // Neutral color
        },
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
