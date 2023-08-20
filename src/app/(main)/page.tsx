import type { Metadata } from "next";

import { Box, Center } from "~/components/core";

export const metadata: Metadata = {
  title: "Kelaz",
  description: "Kelaz",
};

export default function Home() {
  return (
    <Box as={Center}>
      <Box as="span" className="text-lg font-medium select-none">
        Home
      </Box>
    </Box>
  );
}
