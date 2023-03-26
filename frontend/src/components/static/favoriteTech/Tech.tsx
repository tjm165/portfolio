import { Button } from "@mui/material";

export type PropTypes = {
  image?: string;
  onClick: any;
  backgroundColor: string;
};

export default function Tech({ backgroundColor, image, onClick }: PropTypes) {
  return (
    <Button
      sx={{
        height: "6vh",
        width: "8vw",
        padding: "1vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
      onClick={onClick}
    >
      <img
        width="80%"
        src={image}
        style={{
          objectFit: "cover",
        }}
      />
    </Button>
  );
}
