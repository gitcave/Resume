import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: ReactElement | ReactElement[];
};

const Layout = ({ children, ...props }: Props): ReactElement => {
  return (
    <Flex direction="column" {...props}>
      {children}
    </Flex>
  );
};

export default Layout;
