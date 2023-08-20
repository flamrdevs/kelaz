import type { Metadata } from "next";

import { Box, Center } from "~/components/core";

export const metadata: Metadata = {
  title: "Contact - Kelaz",
  description: "Contact",
};

export default function Contact() {
  return (
    <Box as={Center}>
      <Box as="span" className="text-lg font-medium select-none">
        Contact
      </Box>
    </Box>
  );
}
