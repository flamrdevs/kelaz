import { GithubIcon } from "lucide-react";

import { Box, Button, Center, Flex } from "~/components/core";

import { NavLinks } from "./components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box as="main" className="container max-w-screen-sm mx-auto min-h-[100dvh]">
      <Box as="header" p="2">
        <Flex ai="center" jc="between" gap="1" px="5" py="2" radius="xl" className="bg-neutral-2 shadow-md">
          <NavLinks />

          <Button>
            <Center gap="1">
              <GithubIcon size={20} />
              Open in Github
            </Center>
          </Button>
        </Flex>
      </Box>

      <Box as="main" p="2">
        <Box px="5" py="2" radius="xl" className="bg-neutral-2 shadow-md">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
