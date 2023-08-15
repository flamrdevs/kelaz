import { Box, Center } from "~/components/core";

export default function RootNotFound() {
  return (
    <Box as={Center} className="w-screen h-screen overflow-hidden">
      <Box as="span" className="text-xl font-semibold select-none">
        404 | Page not found
      </Box>
    </Box>
  );
}
