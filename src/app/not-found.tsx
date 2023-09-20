import { Center, Text } from "~/components/core";

export default function RootNotFound() {
  return (
    <Center className="w-screen h-screen overflow-hidden">
      <Text size="xl" weight="5" className="select-none">
        404 | Page not found
      </Text>
    </Center>
  );
}
