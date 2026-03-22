import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          green: "#22c55e",
          gold: "#fbbf24",
          blue: "#3B82F6",
        },
        dark: {
          bg: "#020617",
          card: "#0f172a",
          border: "#1e293b",
        }
      },
    },
  },
  plugins: [],
};
export default config;
