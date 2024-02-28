import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        title: "var(--title-color)",
        subtitle: "var(--text-color)",
        body: "var(--body)",
        blue: "var(--blue)",
        "fade-blue": "var(--fade-blue)",
        red: "var(--red)",
        dark: "#212b36",
        "dark-gray": "#454f5b",
        white: "var(--white)",
        // states
        success: " #198754",
        info: " #0ea5e9",
        warning: " #f59e0b",
        danger: " #dc3545",
        // custom-colors
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#d63384",
        orange: "#fd7e14",
        yellow: "#f59e0b",
        green: "#198754",
        teal: "#20c997",
        cyan: "#0ea5e9",
        gray: "#637381",
      },
    },
  },
  plugins: [],
};
export default config;
