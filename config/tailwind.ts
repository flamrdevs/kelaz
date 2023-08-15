import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

import coloradix from "./tailwind.coloradix";
import * as klass from "./tailwind.klass";

export const safelist = [...klass.safelist] satisfies Config["safelist"];

export const theme = {
  colors: coloradix.colors,
  fontFamily: {
    sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
    mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
  },
} satisfies Config["theme"];

export const plugins = [coloradix.plugin] satisfies Config["plugins"];
