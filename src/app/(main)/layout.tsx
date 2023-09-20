import { GithubIcon } from "lucide-react";

import { Box, Button, Container, Flex } from "~/components/core";

import { NavLinks } from "./components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main" maxW="sm" className="min-h-[100dvh]">
      <Box as="header" p="2">
        <Flex ai="center" jc="between" gap="1" px="4" py="2" radius="xl" className="bg-neutral-2 shadow-md">
          <NavLinks />

          <Button as="a" href="https://github.com/flamrdevs/kelaz">
            <GithubIcon size={20} />
            <span>Open in Github</span>
          </Button>
        </Flex>
      </Box>

      <Box as="main" p="2">
        <Box px="4" py="2" radius="xl" className="bg-neutral-2 shadow-md">
          {children}
        </Box>
      </Box>
    </Container>
  );
}
