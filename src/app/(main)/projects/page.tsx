import type { Metadata } from "next";

import { Box, Center } from "~/components/core";

export const metadata: Metadata = {
  title: "Projects - Kelaz",
  description: "Projects",
};

export default function Projects() {
  return (
    <Box as={Center}>
      <Box as="span" className="text-lg font-medium select-none">
        Projects
      </Box>
    </Box>
  );
}
