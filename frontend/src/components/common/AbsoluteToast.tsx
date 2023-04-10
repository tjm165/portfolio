import { useEffect } from "react";
import { Message, Icon } from "semantic-ui-react";

export enum Position {
  TOP_LEFT,
  BOTTOM_LEFT,
  TOP_RIGHT,
  BOTTOM_RIGHT,
}

type AbsoluteToastProps = {
  show: boolean;
  text: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  position: Position;
};

export default function AbsoluteToast({
  show,
  text,
  setShow,
  position,
}: AbsoluteToastProps) {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  });

  const positionCss = () => {
    switch (position) {
      case Position.TOP_RIGHT:
        return { top: "10px", right: "10px" };
      case Position.BOTTOM_RIGHT:
        return { bottom: "10px", right: "10px" };
      case Position.BOTTOM_LEFT:
        return { bottom: "10px", left: "10px" };
      case Position.BOTTOM_RIGHT:
        return { bottom: "10px", right: "10px" };
    }
  };

  return (
    // TODO Add Semantic UI transition fade with timeout

    <Message
      icon="clipboard check"
      header={text}
      positive
      compact
      style={{ ...positionCss }}
    />
  );
}
