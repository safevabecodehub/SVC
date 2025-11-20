import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1C",
        card: "#111826",
        accent: {
          cyan: "#00D4FF",
          purple: "#8B5CF6",
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00D4FF 0%, #8B5CF6 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
