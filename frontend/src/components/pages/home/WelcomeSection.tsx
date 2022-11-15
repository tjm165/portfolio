import React from "react";
import { HeroSection } from "../../common/section";
import { Button } from "@mui/material";

export default function WelcomeSection() {
  return (
    <HeroSection
      heading="Hi my name is Tommy Moawad. I'm a full stack software engineer"
      subheading="I love serverless, cloud, and data."
      //@ts-ignore
      contentImageSrc={require("../../../moawad.jpg")}
      boxChild={
        <Button
          href="mailto:tom.moawad@gmail.com"
          variant="outlined"
          color="secondary"
        >
          Get in Touch
        </Button>
      }
    />
  );
}
