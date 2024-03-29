import React from "react";
import { Avatar, AvatarGroup, Box } from "@chakra-ui/react";
import { Flex, Spacer, Center } from "@chakra-ui/react";

export default function NavigationBar() {
  return (
    <Box bg="green.300" w="100%" p={2} color="white">
      <Flex>
        <Box bg="red.400">
          <Center h="50px">Food Admin</Center>
        </Box>
        <Spacer />
        <Box  bg="green.300">
          <AvatarGroup spacing="1rem">
            <Avatar bg="red.500"/>
          </AvatarGroup>
        </Box>
      </Flex>
    </Box>
  );
}
