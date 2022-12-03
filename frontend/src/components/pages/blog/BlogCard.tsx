import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import { AbsoluteToast, Severity, Position } from "../../common";

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
    setShowCopySuccess(true);
  }

  return (
    <>
      <AbsoluteToast
        show={showCopySuccess}
        setShow={setShowCopySuccess}
        severity={Severity.SUCCESS}
        text="Copied to clipboard"
        position={Position.BOTTOM_LEFT}
      />

      <Card
        sx={{ maxWidth: 345 }}
        style={{
          flexBasis: "33.333333%",
          marginBottom: "5vh",
          marginLeft: "0px",
          marginRight: "20px",
        }}
      >
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
