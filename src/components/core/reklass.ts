import { reklass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

export const conditions = {
  base: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
};

export const defaultCondition = "base" satisfies keyof typeof conditions;

const spacing = (property: string) => {
  return {
    "0": `${property}-0`,
    "1": `${property}-1`,
    "2": `${property}-2`,
    "3": `${property}-3`,
    "4": `${property}-4`,
    "5": `${property}-5`,
    "6": `${property}-6`,
    "7": `${property}-7`,
    "8": `${property}-8`,
  };
};

export type DisplayVariants = VariantsOf<typeof Display>;
export const Display = reklass({
  conditions,
  defaultCondition,
  variants: {
    d: {
      none: "hidden",
      block: "block",
      iblock: "inline-block",
      flex: "flex",
      iflex: "inline-flex",
    },
  },
});

export type AlignVariants = VariantsOf<typeof Align>;
export const Align = reklass({
  conditions,
  defaultCondition,
  variants: {
    ai: {
      center: "items-center",
    },
  },
});

export type JustifyVariants = VariantsOf<typeof Justify>;
export const Justify = reklass({
  conditions,
  defaultCondition,
  variants: {
    jc: {
      center: "justify-center",
      between: "justify-between",
    },
  },
});

export type MarginVariants = VariantsOf<typeof Margin>;
export const Margin = reklass({
  conditions,
  defaultCondition,
  variants: {
    m: spacing("m"),
    mx: spacing("mx"),
    my: spacing("my"),
    mt: spacing("mt"),
    mr: spacing("mr"),
    mb: spacing("mb"),
    ml: spacing("ml"),
  },
});

export type PaddingVariants = VariantsOf<typeof Padding>;
export const Padding = reklass({
  conditions,
  defaultCondition,
  variants: {
    p: spacing("p"),
    px: spacing("px"),
    py: spacing("py"),
    pt: spacing("pt"),
    pr: spacing("pr"),
    pb: spacing("pb"),
    pl: spacing("pl"),
  },
});

export type GapVariants = VariantsOf<typeof Gap>;
export const Gap = reklass({
  conditions,
  defaultCondition,
  variants: {
    gap: spacing("gap"),
  },
});

export type BorderVariants = VariantsOf<typeof Border>;
export const Border = reklass({
  conditions,
  defaultCondition,
  variants: {
    radius: {
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    },
  },
});
