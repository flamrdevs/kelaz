import type { Metadata } from "next";

import { Center, Text } from "~/components/core";

export const metadata: Metadata = {
  title: "Kelaz",
  description: "Kelaz",
};

export default function Home() {
  return (
    <Center>
      <Text size="lg" weight="5" className="select-none">
        Home
      </Text>
    </Center>
  );
}
