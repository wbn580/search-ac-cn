/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#075985',
        accent:  '#FACC15',
        bg:      '#F0F9FF',
        ink:     '#082F49',
        muted:   '#4A7A9A',
      },
      fontFamily: {
        heading: ['Maple Mono', 'Georgia', 'serif'],
        body:    ['SimSun', 'system-ui', 'sans-serif'],
        mono:    ['SF Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
      },
    },
  },
  plugins: [],
};
