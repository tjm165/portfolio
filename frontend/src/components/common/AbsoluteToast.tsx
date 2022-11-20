import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";

export enum Severity {
  SUCCESS = "success",
}

export enum Position {
  TOP_LEFT,
  BOTTOM_LEFT,
  TOP_RIGHT,
  BOTTOM_RIGHT,
}

type AbsoluteToastProps = {
  show: boolean;
  text: string;
  severity: Severity;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  position: Position;
};

export default function AbsoluteToast({
  show,
  text,
  severity,
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
    <Fade in={show} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 1000 }}>
      <div style={{ zIndex: "100", position: "fixed", ...positionCss() }}>
        {/* @ts-ignore */}
        <Alert severity={severity}>{text}</Alert>
      </div>
    </Fade>
  );
}
