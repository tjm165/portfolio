import { COLOR, MyLandingContainer } from "../common";
import { HeroSection } from "../common";

export const Example = () => {
  return (
    <>
      <HeroSection />
      <MyLandingContainer color={COLOR.BEIGE}>
        <div> Hello world?</div>
      </MyLandingContainer>
      <MyLandingContainer color={COLOR.BLUE}>
        <div> Hello world?</div>
      </MyLandingContainer>
    </>
  );
};
