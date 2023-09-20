import type { Metadata } from "next";

import { Center, Text } from "~/components/core";

export const metadata: Metadata = {
  title: "Projects - Kelaz",
  description: "Projects",
};

export default function Projects() {
  return (
    <Center>
      <Text size="lg" weight="5" className="select-none">
        Projects
      </Text>
    </Center>
  );
}
