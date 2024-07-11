import { Icon } from "@chakra-ui/react";

const PrevIcon = ({ size, color }: any) => (
  <Icon boxSize={size} viewBox="0 0 24 25" fill="none">
    <path
      d="M16.0865 8.10636C17.071 7.51287 15.5121 6.57318 14.5276 7.21613L7.30767 11.5189C6.89744 11.7662 6.89744 12.2113 7.30767 12.4586L14.5276 16.8108C15.5121 17.4043 17.071 16.4646 16.0865 15.8712L9.68696 12.0135L16.0865 8.10636Z"
      fill={color}
    />
  </Icon>
);

export default PrevIcon;
