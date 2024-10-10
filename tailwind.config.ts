import type { Config } from "tailwindcss";
import * as theme from './theme';
import { Inter } from "next/font/google";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: theme.colors,
      colors: theme.colors,
      screens: theme.screens,
      width: theme.width,
      padding:theme.padding,
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        ...theme.fontFamily
      },
      zIndex: theme.zIndex
    },
  },
  plugins: [],
};
export default config;
