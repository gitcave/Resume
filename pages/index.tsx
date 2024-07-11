import CarouselContainer from "@/components/carousel";
import PageLayout from "@/components/layouts/pageLayout";
import { HOME_CAROUSEL_ITEMS } from "@/utils/constans";
import {
  Box,
  Button,
  HStack,
  Spacer,
  VStack,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";

type Props = {};

const Home = (props: Props) => {
  return (
    <VStack w={"full"}>
      <CarouselContainer carouselItems={HOME_CAROUSEL_ITEMS} />
      <Heading variant={"H1"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </Text>
    </VStack>
  );
};

Home.PageLayout = PageLayout;
export default Home;
