import type { ClassValue, VariantsOf } from "@klass/core";
import { klassed } from "@klass/react";

import { __DEV__ } from "~/env";

type TextProps = Omit<React.JSX.IntrinsicElements["span"], "className"> & { className?: ClassValue } & TextVariants;
type TextVariants = VariantsOf<(typeof Text)["klass"]>;

const Text = klassed("span", {
  base: "inline-flex items-center justify-center outline-none rounded-lg",
  variants: {
    align: {
      center: "text-center",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-lg",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
    },
    weight: {
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
    },
  },
});

if (__DEV__) (Text as any).displayName = "Text";

export type { TextProps, TextVariants };
export default Text;
