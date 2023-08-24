import React from "react";
import { Box, Image, Flex, Badge, Text, Icon } from "@chakra-ui/react";

export default function PuppyCard() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="purple.500"
      bgGradient="linear(to-b, purple.500 0%, transparent 100%)"
    >
      <Image src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66299448/1/?bust=1692541297&width=450" alt="Puppy image" />

      <Box p="6">
        <Flex align="baseline">
          <Badge borderRadius="full" px="2" colorScheme="purple" bgGradient="linear(to-r, pink.500, purple.500)">
            Girlfren
          </Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="purple.800"
          >
            Puppy • Affenpinscher • 7 miles away
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
