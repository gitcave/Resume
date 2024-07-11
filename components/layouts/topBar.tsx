import { Box, Button, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TopBar = () => {
  const [active, setActive] = useState(`/`);
  const router = useRouter();
  useEffect(() => {
    const projectUrl = router.query.launchpadname;
    const route = router.route as string;

    if (projectUrl) {
      setActive(
        `${projectUrl}/${route.split("/")[route.split("/").length - 1]}`
      );
    } else {
      if (route.includes("/projects")) {
        setActive("home");
      }
    }
  }, [router.query, router, router.route]);
  const handleClick = (event: any) => {
    setActive(event.target.id);
  };
  return (
    <>
      <HStack
        w={"full"}
        h={"64px"}
        px={"32px"}
        bg={"gray.100"}
        spacing={"16px"}
        align={"center"}
      >
        <HStack w={"200px"}>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            w={"64px"}
            h={"64px"}
            objectFit={"contain"}
          />
          <Text fontSize={"xl"} fontWeight={"bold"}>
            XX游学
          </Text>
        </HStack>

        <Spacer />
        <Button
          variant="menu"
          id={"home"}
          color={active === "home" ? "blue.500" : "black.500"}
          //bgColor={active === "work" ? "#2B2C3E" : "none"}
          onClick={(e: any) => {
            handleClick(e);
            router.push(`/`);
          }}
        >
          首页
        </Button>
        <Button
          variant="menu"
          id={"work"}
          color={active === "work" ? "blue.500" : "black.500"}
          //bgColor={active === "work" ? "#2B2C3E" : "none"}
          onClick={(e: any) => {
            handleClick(e);
            router.push(`/work`);
          }}
        >
          劳务
        </Button>
        <Button
          variant="menu"
          id={"education"}
          color={active === "education" ? "blue.500" : "black.500"}
          onClick={(e: any) => {
            handleClick(e);
            router.push(`/education`);
          }}
        >
          留学
        </Button>
        <Button
          variant="menu"
          id={"education-tour"}
          color={active === "education-tour" ? "blue.500" : "black.500"}
          //bgColor={active === "education-tour" ? "#2B2C3E" : "none"}
          onClick={(e: any) => {
            handleClick(e);
            router.push(`/education-tour`);
          }}
        >
          游学
        </Button>
        <Spacer />
        <Box w={"200px"} />
      </HStack>
    </>
  );
};
export default TopBar;
