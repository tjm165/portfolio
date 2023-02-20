import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { AbsoluteToast, Severity, Position } from "../../common";

export type BlogCardProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  isLeft: boolean;
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

      <Card>
        <CardActionArea component={Link} to={subPath}>
          <CardMedia
            component="img"
            height="320vh"
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
      </Card>
    </>
  );
}
