import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      from: {
        btn: "#FF9A1A",
        btn2: "#EC1C09",
      },
      to: {
        btn: "#FF9A1A",
        btn2: "#EC1C09",
      },
      backgroundColor: {
        primary: "#F2F7FC",
        foreground: "#fff",
        secondary: "#F2F7FC",
        btn: "#FF9A1A",
        btn2: "#EC1C09",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "#0B0909",
        contrast: "white",
        btn: "#FF9A1A",
        btn2: "#EC1C09",
      },
    },
  },
  plugins: [],
};
export default config;
