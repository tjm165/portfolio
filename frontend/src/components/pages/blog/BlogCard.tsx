import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { AbsoluteToast, Severity, Position } from "../../common";

export type BlogCardProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  isLeft: boolean;
  bgcolor: string;
};

export default function BlogCard({
  title,
  description,
  path,
  image,
  bgcolor,
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
        sx={{
          borderRadius: "0",
        }}
      >
        <CardActionArea component={Link} to={subPath}>
          <CardContent
            sx={{
              bgcolor,
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                height="300vh"
                src={image || "https://picsum.photos/200/300"}
              />
            </div>
          </CardContent>

          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
