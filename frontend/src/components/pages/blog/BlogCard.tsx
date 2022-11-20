import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

export type BlogCardProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export default function BlogCard({
  title,
  description,
  path,
  image,
}: BlogCardProps) {
  const subPath = `/blog/${path}`;
  const fullUrl = `${window.location.origin}/blog/${path}`;
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  async function copyToClipboard(data: string) {
    await navigator.clipboard.writeText(data);

    // Alert the copied text
    setShowCopySuccess(true);
    setTimeout(() => {
      setShowCopySuccess(false);
    }, 2000);
  }

  return (
    <>
      <Fade
        in={showCopySuccess}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <div style={{ position: "absolute", left: "10px", bottom: "10px" }}>
          <Alert severity="success">Copied to clipboard</Alert>
        </div>
      </Fade>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to={subPath}>
          <CardMedia
            component="img"
            height="140"
            image={image || "https://picsum.photos/200/300"}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => copyToClipboard(fullUrl)}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
