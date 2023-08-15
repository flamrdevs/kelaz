import { Box, Center } from "~/components/core";

export default function Home() {
  return (
    <Box as={Center} className="w-screen h-screen overflow-hidden">
      <Box as="span" className="text-3xl font-bold select-none">
        Kelaz
      </Box>
    </Box>
  );
}
