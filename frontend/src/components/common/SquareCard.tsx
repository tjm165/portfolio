import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export type BlogCardProps = {
  title: string;
  image?: string;
  onClick: any;
};

export default function SquareCard({ title, image, onClick }: BlogCardProps) {
  return (
    <>
      <Card
        sx={{
          borderRadius: "0",
        }}
        elevation={4}
      >
        <CardActionArea
          onClick={onClick}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "15vh",
            width: "15vh",
          }}
        >
          <CardContent>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                height="50vh"
                src={image}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </CardContent>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="subtitle1"
              component="div"
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
