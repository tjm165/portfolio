import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { AbsoluteToast, Severity, Position } from "../common";

export type BlogCardProps = {
  title: string;
  image?: string;
  onClick: any;
};

export default function TommyCard({ title, image, onClick }: BlogCardProps) {
  return (
    <>
      <Card
        elevation={4}
        sx={{
          borderRadius: "0",
        }}
      >
        <CardActionArea onClick={onClick}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img height="300vh" src={image} />
            </div>
          </CardContent>

          <CardContent>
            <Typography align="center" variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
