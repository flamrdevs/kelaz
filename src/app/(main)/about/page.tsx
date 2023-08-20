import type { Metadata } from "next";

import { Box, Center } from "~/components/core";

export const metadata: Metadata = {
  title: "About - Kelaz",
  description: "About",
};

export default function About() {
  return (
    <Box as={Center}>
      <Box as="span" className="text-lg font-medium select-none">
        About
      </Box>
    </Box>
  );
}
