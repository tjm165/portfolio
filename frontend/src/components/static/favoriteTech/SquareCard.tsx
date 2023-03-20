import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export type BlogCardProps = {
  title: string;
  image?: string;
  onClick: any;
};

export default function SquareCard({ title, image, onClick }: BlogCardProps) {
  return (
    <Paper onClick={onClick} elevation={3}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          height="50vh"
          src={image}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </Paper>
  );
}
