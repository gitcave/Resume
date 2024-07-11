import NextIcon from "@/components/icons/next";
import PrevIcon from "@/components/icons/prev";
import PageLayout from "@/components/layouts/pageLayout";
import {
  Box,
  Button,
  HStack,
  Spacer,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselItemType = {
  imageUrl: string;
};
type CarouselContainerProps = {
  carouselItems: CarouselItemType[];
};
const CarouselContainer = ({ carouselItems }: CarouselContainerProps) => {
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };
  const indicatorStyles: CSSProperties = {
    width: "8px",
    height: "8px",
    display: "inline-block",
    margin: "0 8px",
    background: "#9499AF",
    borderRadius: "50%",
  };
  return (
    <Box w={"full"} p={"16px 16px 0 16px"} borderRadius={"16px"}>
      <Carousel
        infiniteLoop
        autoPlay={true}
        //10s
        showThumbs={false}
        interval={10000}
        showStatus={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <Button
              onClick={onClickHandler}
              variant={"unstyled"}
              style={{ ...arrowStyles, left: 15 }}
            >
              <PrevIcon size={6} color={"#9499AF"} />
            </Button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <Button
              onClick={onClickHandler}
              variant={"unstyled"}
              style={{ ...arrowStyles, right: 15 }}
            >
              <NextIcon size={6} color={"#9499AF"} />
            </Button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                key={index}
                style={{ ...indicatorStyles, background: "#73AAFF" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {carouselItems.map((carouselItem, index) => {
          return <CarouselItem key={index} carouselItem={carouselItem} />;
        })}
      </Carousel>
    </Box>
  );
};

type CarouselItemProps = {
  carouselItem: CarouselItemType;
};
const CarouselItem = ({ carouselItem }: CarouselItemProps) => {
  return (
    <Image
      src={carouselItem.imageUrl}
      pb={"42px"}
      maxW={"400px"}
      h={"auto"}
      borderRadius={"12px"}
      alt={"New Feature image"}
    />
  );
};

export default CarouselContainer;
