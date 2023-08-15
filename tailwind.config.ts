import type { Config } from "tailwindcss";

import * as config from "./config/tailwind";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: config.theme,
  plugins: config.plugins,
} satisfies Config;
