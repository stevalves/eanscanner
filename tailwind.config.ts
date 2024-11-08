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
        brand1: "#f2e205",
        brand2: "#f2921d",
        brand3: "#f27b13",
        brand4: "#d95525",
        gray0: "#f7f8f9",
        gray1: "#e8ebed",
        gray2: "#c9cdd2",
        gray3: "#9ea4aa",
        gray4: "#73787f",
        gray5: "#454c53",
        gray6: "#29272b",
        gray7: "#1b1d1f",
        black: "#000",
        white: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
export default config;
