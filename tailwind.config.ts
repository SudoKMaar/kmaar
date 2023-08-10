import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      indigo: {
        light: "#9f55ff",
        dark: "#7000ff",
      },
      purple: "#8b31ff",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      tall: { raw: "(min-height: 650px)" },
    },
    extend: {
      backgroundImage: {
        circleStar: 'url("/circle-star.svg")',
        explosion: 'url("/bg-explosion.png")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: { "spin-slow": "spin 6s linear infinite" },
      fontFamily: {
        logo: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
