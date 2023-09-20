import type { ClassValue, VariantsOf } from "@klass/core";
import { klassed } from "@klass/react";

import { __DEV__ } from "~/env";

type ContainerProps = Omit<React.JSX.IntrinsicElements["div"], "className"> & { className?: ClassValue } & ContainerVariants;
type ContainerVariants = VariantsOf<(typeof Container)["klass"]>;

const Container = klassed("div", {
  base: "container",
  variants: {
    center: {
      true: "mx-auto",
    },
    maxW: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
    },
  },
  defaultVariants: {
    center: true,
  },
});

if (__DEV__) (Container as any).displayName = "Container";

export type { ContainerProps, ContainerVariants };
export default Container;
