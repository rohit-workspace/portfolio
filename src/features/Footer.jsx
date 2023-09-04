import { HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export function Footer() {
  return (
    <HStack justify={"center"} h={130} bg="secondary">
      <Link
        href="https://www.linkedin.com/in/rohit-chaudhari-62126a265/"
        isExternal
      >
        <Icon
          as={BsLinkedin}
          w={8}
          h={8}
          color="#03A9F4"
          bg={"white"}
          borderRadius={5}
        ></Icon>
      </Link>
      <Link href="https://github.com/rohit-workspace" isExternal>
        <Icon as={BsGithub} w={8} h={8} color="white"></Icon>
      </Link>
    </HStack>
  );
}
