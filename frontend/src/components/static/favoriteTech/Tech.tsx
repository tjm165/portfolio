import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export type BlogCardProps = {
  title: string;
  image?: string;
  onClick: any;
};

const backgroundColor = "transparent";
export default function Tech({ title, image, onClick }: BlogCardProps) {
  return (
    <Paper
      sx={{
        padding: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
      onClick={onClick}
      elevation={3}
    >
      <img
        height="40vh"
        src={image}
        style={{
          objectFit: "cover",
        }}
      />
    </Paper>
  );
}
