import React from "react";

import { __DEV__ } from "~/env";

import Flex from "./Flex";
import type { FlexProps } from "./Flex";

type CenterProps = FlexProps & { inline?: boolean };

const Center = React.forwardRef<HTMLDivElement, CenterProps>((props, ref) => {
  return <Flex {...props} ref={ref} ai="center" jc="center" />;
});

if (__DEV__) Center.displayName = "Center";

export type { CenterProps };
export default Center;
