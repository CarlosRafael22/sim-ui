import { useState } from "react";

import Button, { ButtonProps } from "../Button";
import { Spinner, Check, Failed } from "../../../../assets/icons";

interface PromiseFeedbackButtonProps extends Omit<ButtonProps, "onClick"> {
  onClick: () => Promise<unknown>;
}

type ButtonState = "idle" | "isFetching" | "hasSuccess" | "hasFailed";

export const PromiseFeedbackButton = ({
  onClick,
  children,
  ...props
}: PromiseFeedbackButtonProps): React.ReactElement => {
  const [state, setState] = useState<ButtonState>("idle");
  const statusIcon = {
    isLoading: <Spinner />,
    isSuccess: <Check />,
    isFailed: <Failed />,
  };

  /*   useEffect(() => {
      const timer = setTimeout(() => console.log('Initial timeout!'), 1000);
      return () => clearTimeout(timer);
    }, [state]); */

  const handleClick = async () => {
    setState("isFetching");
    try {
      await onClick();
      setState("hasSuccess");
      setTimeout(() => setState("idle"), 1000);
    } catch (error) {
      setState("hasFailed");
      setTimeout(() => setState("idle"), 1000);
    }
  };
  return (
    <Button onClick={handleClick} {...props}>
      <span style={{ display: "flex", alignItems: "center" }}>
        {state === "isFetching" && <span>{statusIcon["isLoading"]}</span>}
        {state === "hasFailed" && <span>{statusIcon["isFailed"]}</span>}
        {state === "hasSuccess" && <span>{statusIcon["isSuccess"]}</span>}
        {state === "idle" && children}
      </span>
    </Button>
  );
};

export default PromiseFeedbackButton;
