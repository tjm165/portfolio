import { HeroSection, SimpleSection } from "../../common/section";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FavoriteTech } from "../../static";

export default function WelcomeSection() {
  return (
    <>
      <HeroSection
        heading="Hi,\nMy name is Thomas Moawad."
        subheading="I'm a full stack software engineer."
        //@ts-ignore
        contentImageSrc={require("../../../moawad.jpg")}
        boxChild={
          <>
            <div>I love serverless, cloud, and scalability.</div>

            <div>
              I am frequently recognized for bridging the gap between techical
              and business concepts.
            </div>
            <br></br>
            <Button
              startIcon={<LinkedInIcon />}
              href="mailto:tom.moawad@gmail.com"
              color="primary"
              variant="contained"
            >
              Connect on LinkedIn
            </Button>
          </>
        }
      />
      <SimpleSection headingText="None">
        <FavoriteTech />
      </SimpleSection>
    </>
  );
}
