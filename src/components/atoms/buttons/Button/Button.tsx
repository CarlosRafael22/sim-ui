import type * as Stitches from "@stitches/react";
import { styled, config } from "../../../../stitches.config";

type CSS = Stitches.CSS<typeof config>;

const ButtonStyle = styled("button", {
  borderRadius: "$3",
  border: "solid 1px $grayPrimary",
  padding: "$2 $3",
  fontSize: "$3",
  fontWeight: 600,
  cursor: "pointer",
  color: "$blackPrimary",
  backgroundColor: "$grayPrimary",
  "&:hover": {
    backgroundColor: "$grayHover",
  },
  variants: {
    color: {
      blue: {
        border: "solid 1px $bluePrimary",
        backgroundColor: "$bluePrimary",
        color: "$whitePrimary",
        "&:hover": {
          backgroundColor: "$blueHover",
          border: "solid 1px $blueHover",
        },
      },
      red: {
        border: "solid 1px $redPrimary",
        backgroundColor: "$redPrimary",
        color: "$whitePrimary",
        "&:hover": {
          backgroundColor: "$redHover",
          border: "solid 1px $redHover",
        },
      },
      green: {
        border: "solid 1px $greenPrimary",
        backgroundColor: "$greenPrimary",
        color: "$whitePrimary",
        "&:hover": {
          backgroundColor: "$greenHover",
          border: "solid 1px $greenHover",
        },
      },
    },
    type: {
      Primary: {
        border: "solid 1px $bluePrimary",
        backgroundColor: "$bluePrimary",
        color: "$whitePrimary",
        "&:hover": {
          backgroundColor: "$blueHover",
          border: "solid 1px $blueHover",
        },
      },
      Secondary: {
        border: "solid 1px $blackPrimary",
        backgroundColor: "$whitePrimary",
        "&:hover": {
          border: "solid 1px $blackPrimary",
        },
      },
      Tertiary: {
        border: "solid 1px transparent",
        backgroundColor: "transparent",
        color: "$bluePrimary",
        "&:hover": {
          border: "solid 1px transparent",
          backgroundColor: "$grayHover",
        },
      },
    },
    outlined: {
      true: {
        minHeight: 48,
        border: "solid 1px $blackPrimary",
        backgroundColor: "$whitePrimary",
        "&:hover": {
          border: "solid 1px $blackPrimary",
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: "$grayDisabled",
        border: "solid 1px $grayDisabled",
        "&:hover": {
          backgroundColor: "$grayDisabled",
          border: "solid 1px $grayDisabled",
        },
      },
    },
    success: {
      true: {
        backgroundColor: "#16a085",
      },
    },
    size: {
      S: {
        padding: "8px 16px",
      },
      M: {
        padding: "12px 20px",
      },
      L: {
        padding: "14px 32px",
      },
    },
  },
  defaultVariants: {
    size: "S",
  },
});

const TextStyle = styled("span", {
  fontFamily: "SFProDisplay",
  fontSize: "16px",
  fontWeight: 600,
  color: "#173753",
});

export interface ButtonProps {
  children: React.ReactNode;
  color?: "blue" | "red" | "green";
  type?: "Primary" | "Secondary" | "Tertiary";
  size?: "S" | "M" | "L";
  onClick?: () => void;
  [key: string]: unknown;
}

const Button = ({
  children,
  color,
  type,
  size,
  onClick,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyle
      color={color}
      type={type}
      size={size}
      onClick={onClick}
      // css={{...props as CSS}}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
