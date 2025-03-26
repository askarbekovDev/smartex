import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      w1440: { max: '1440px' },
      w1350: { max: '1350px' },
      w1250: { max: '1250px' },
      w1150: { max: '1150px' },
      w1050: { max: '1050px' },
      w950: { max: '950px' },
      w850: { max: '850px' },
      w750: { max: '750px' },
      w650: { max: '650px' },
      w550: { max: '550px' },
      w450: { max: '450px' },
      w420: { max: '420px' },
      w370: { max: '370px' },
    },
    extend: {
      colors: {
        background: 'var(--background)', // Светло-серый (фон)
        primary: 'var(--primary)', // Темно-синий (основной цвет)
        primaryText: 'var(--primary-text)', // Темно-серый (текст на основном фоне)
        secondary: 'var(--secondary)', // Оранжевый (второстепенный цвет)
        secondaryText: 'var(--secondary-text)', // Серый (текст на второстепенном фоне)
        border: 'var(--border)', // Серый (границы, разделители)
        icons: 'var(--icons)', // Серый (цвет иконок)
        success: 'var(--success)', // Зеленый (успешно)
        error: 'var(--error)', // Красный (ошибка)
        warning: 'var(--warning)', // Желтый-оранжевый (предупреждение)
        info: 'var(--info)', // Синий (информация)
        dark: 'var(--dark)', // Глубокий черный
      },
      fontFamily: {
        rubik: 'var(--font-rubik)',
        lato: 'var(--font-lato)',
      },
    },
  },
  plugins: [],
} satisfies Config;
