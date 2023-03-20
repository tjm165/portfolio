import { SimpleSection } from "../../common/section";
import { MyLandingContainer } from "../../common";
import { useTitle } from "../../../hooks";
import Timeline from "./timeline";
import FavoriteTechSection from "../../static/favoriteTech/realIndex";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const title = "About Me";
  useTitle(title);
  const theme = useTheme();

  return (
    <>
      <FavoriteTechSection />
      <MyLandingContainer autoHeight color={theme.palette.primary.main}>
        <SimpleSection headingText="Career Timeline">
          <Timeline />
        </SimpleSection>
      </MyLandingContainer>
    </>
  );
}
