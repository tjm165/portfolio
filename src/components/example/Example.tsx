import { COLOR, MyLandingContainer } from "../common";
import MyHeader from "../global/MyHeader";

export const Example = () => {
  return (
    <div>
      <MyHeader />
      <MyLandingContainer color={COLOR.BLUE}>
        <div> Hello world?</div>
      </MyLandingContainer>
      <MyLandingContainer color={COLOR.BEIGE}>
        <div> Hello world?</div>
      </MyLandingContainer>
    </div>
  );
};
