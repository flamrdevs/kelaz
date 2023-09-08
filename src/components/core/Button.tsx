import type { ClassValue, VariantsOf } from "@klass/core";
import { klassed } from "@klass/react";

import { __DEV__ } from "~/env";

type ButtonProps = Omit<React.JSX.IntrinsicElements["button"], "className"> & { className?: ClassValue } & ButtonVariants;
type ButtonVariants = VariantsOf<(typeof Button)["klass"]>;

const Button = klassed(
  "button",
  {
    base: "inline-flex items-center justify-center outline-none rounded-lg",
    variants: {
      color: {
        neutral: "bg-neutral-3",
        primary: "bg-primary-3",
      },
      size: {
        md: "px-4 py-1 h-8 font-medium text-base",
      },
    },
    defaultVariants: {
      color: "neutral",
      size: "md",
    },
  },
  {
    dp: {
      type: "button",
    },
  }
);

if (__DEV__) (Button as any).displayName = "Button";

export type { ButtonProps, ButtonVariants };
export default Button;
