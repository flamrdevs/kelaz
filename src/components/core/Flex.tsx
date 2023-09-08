import React from "react";

import { __DEV__ } from "~/env";

import Box from "./Box";
import type { BoxProps } from "./Box";

type FlexProps = BoxProps & { inline?: boolean };

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(({ inline, ...props }, ref) => {
  return <Box as="div" {...props} ref={ref} d={inline ? "iflex" : "flex"} />;
});

if (__DEV__) Flex.displayName = "Flex";

export type { FlexProps };
export default Flex;
