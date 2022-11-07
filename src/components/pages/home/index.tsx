import { COLOR, MyLandingContainer } from "../../common";
import WelcomeSection from "./WelcomeSection";

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <MyLandingContainer color={COLOR.BEIGE}>
        <div> Hello world?</div>
      </MyLandingContainer>
      <MyLandingContainer color={COLOR.BLUE}>
        <div> Hello world?</div>
      </MyLandingContainer>
    </>
  );
}
