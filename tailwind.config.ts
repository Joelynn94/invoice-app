import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#633CFF",
          300: "#beadff",
          50: "#efebff",
        },
        secondary: {
          500: "#1e2139",
          300: "#ffe9ad",
          50: "#fff9e6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
