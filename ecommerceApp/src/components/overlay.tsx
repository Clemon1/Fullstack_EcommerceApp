import { Box } from "@chakra-ui/react";

interface Props {
  showOverlay: boolean;
  handleCart: () => void;
}
const Overlay = ({ showOverlay, handleCart }: Props) => {
  return (
    <Box
      onClick={handleCart}
      width={"120vw"}
      height={"100vh"}
      position={"fixed"}
      zIndex={"50000 !important"}
      display={showOverlay ? "none" : "block"}
      bg={"rgba(0,0,0,0.6)"}
      top={0}
      bottom={0}
      transition={"0.4s all"}
      left={"-90"}
      right={0}></Box>
  );
};

export default Overlay;
