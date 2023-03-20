import { Paper } from "@mui/material";

export type BlogCardProps = {
  image?: string;
  onClick: any;
};

const clickablePaperStyle = {
  cursor: "pointer",
  transition: "box-shadow 0.2s ease-out",
  "&:hover": {
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  },
};
const backgroundColor = "transparent";
export default function Tech({ image, onClick }: BlogCardProps) {
  return (
    <Paper
      sx={{
        height: "6vh",
        width: "8vw",
        padding: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        ...clickablePaperStyle,
      }}
      onClick={onClick}
      elevation={5}
    >
      <img
        width="80%"
        src={image}
        style={{
          objectFit: "cover",
        }}
      />
    </Paper>
  );
}
