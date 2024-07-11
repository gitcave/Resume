import { HStack, useBreakpoint, VStack } from "@chakra-ui/react";
import TopBar from "./topBar";

interface Props {
  children: React.ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <VStack w={"full"} h={"full"}>
        <TopBar />
        <VStack spacing={"16px"} w={"full"}>
          {children}
        </VStack>
      </VStack>
    </>
  );
};

export default PageLayout;
