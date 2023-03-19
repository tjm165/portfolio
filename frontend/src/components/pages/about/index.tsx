import { SimpleSection } from "../../common/section";
import { SimpleSubSection } from "../../common/section";
import Container from "@mui/material/Container";
import { useTitle } from "../../../hooks";
import Timeline from "./timeline";
import FavoriteTech from "./favoriteTech";
import Typography from "@mui/material/Typography";

export default function About() {
  const title = "About Me";
  useTitle(title);

  return (
    <Container maxWidth="lg">
      <SimpleSection headingText={title}>
        <>
          <SimpleSubSection headingText="Favorite Tech">
            <FavoriteTech />
          </SimpleSubSection>

          <SimpleSubSection headingText="Career Timeline">
            <Timeline />
          </SimpleSubSection>
        </>
      </SimpleSection>
    </Container>
  );
}
