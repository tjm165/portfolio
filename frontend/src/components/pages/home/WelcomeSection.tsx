import { HeroSection } from "../../common/section";
import { Button } from "@mui/material";

export default function WelcomeSection() {
  return (
    <HeroSection
      heading="Hi my name is Thomas Moawad.\nI'm a full stack software engineer"
      subheading="I love serverless, cloud, and scalability."
      //@ts-ignore
      contentImageSrc={require("../../../moawad.jpg")}
      boxChild={
        <>
          <div>
            I am frequently recognized for bridging the gap between techical and
            business concepts.
          </div>
          <br></br>
          <Button
            href="mailto:tom.moawad@gmail.com"
            color="primary"
            variant="contained"
          >
            Connect on LinkedIn
          </Button>
        </>
      }
    />
  );
}
