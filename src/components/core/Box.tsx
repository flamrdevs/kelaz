import type { ClassValue, VariantsOf } from "@klass/core";
import { reklassed } from "@klass/react";

import { __DEV__ } from "~/env";

import * as reklass from "./reklass";

type BoxProps = Omit<React.JSX.IntrinsicElements["div"], "className"> & { className?: ClassValue } & BoxVariants;
type BoxVariants = VariantsOf<(typeof Box)["reklass"]>;

const Box = reklassed("div", {
  conditions: reklass.conditions,
  defaultCondition: reklass.defaultCondition,
  variants: {
    ...reklass.Display.o.variants,
    ...reklass.Align.o.variants,
    ...reklass.Justify.o.variants,
    ...reklass.Margin.o.variants,
    ...reklass.Padding.o.variants,
    ...reklass.Gap.o.variants,
    ...reklass.Border.o.variants,
  },
});

if (__DEV__) (Box as any).displayName = "Box";

export type { BoxProps, BoxVariants };
export default Box;
