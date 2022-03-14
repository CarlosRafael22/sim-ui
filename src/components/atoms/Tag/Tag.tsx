import { styled } from "../../../stitches.config";

const StyledTag = styled("span", {
  height: "$7",
  borderRadius: "$full",
  backgroundColor: "$bluePrimary",
  color: "$whitePrimary",
  fontFamily: "$default",
  fontSize: "$1",
  fontWeight: "bold",
  textTransform: "uppercase",
  padding: "$1",
  "&:hover": {
    backgroundColor: "$blueHover",
  },
});

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return <StyledTag>{children}</StyledTag>;
};

export default Tag;
