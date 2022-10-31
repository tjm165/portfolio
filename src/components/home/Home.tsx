import { COLOR } from "../common";
import Slide from "./Slide";

const Home = () => {
  return (
    <div>
      <Slide backgroundColor={COLOR.GREEN} backgroundColor2={COLOR.DARK_GREEN}>
        <div>Hello World</div>
      </Slide>
      <Slide backgroundColor={COLOR.DARK_GREEN}>
        <div>Hello World</div>
      </Slide>
    </div>
  );
};

export default Home;
