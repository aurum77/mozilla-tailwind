import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "mozHeaderShadow": "0 0 1px 1px rgba(29,17,51,.04),0 0 3px 2px rgba(9,32,77,.12),0 0 2px -3px rgba(29,17,51,.12)"
      }
    },
  },
  plugins: [],
};
export default config;
