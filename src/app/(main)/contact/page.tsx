import type { Metadata } from "next";

import { Center, Text } from "~/components/core";

export const metadata: Metadata = {
  title: "Contact - Kelaz",
  description: "Contact",
};

export default function Contact() {
  return (
    <Center>
      <Text size="lg" weight={500} className="select-none">
        Contact
      </Text>
    </Center>
  );
}
