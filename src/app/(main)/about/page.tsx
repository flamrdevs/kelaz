import type { Metadata } from "next";

import { Center, Text } from "~/components/core";

export const metadata: Metadata = {
  title: "About - Kelaz",
  description: "About",
};

export default function About() {
  return (
    <Center>
      <Text size="lg" weight="5" className="select-none">
        About
      </Text>
    </Center>
  );
}
