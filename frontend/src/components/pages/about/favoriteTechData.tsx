import ReactIcon from "./react_icon.svg";
import TypescriptIcon from "./typescript_icon.svg";
import AwsIcon from "./aws_icon.png";
import OcamlIcon from "./ocaml_icon.svg";
import { InlineLink } from "../../common";
import { TechCardPropTypes } from "./favoriteTech";

const techCardData: TechCardPropTypes[] = [
  {
    name: "React",
    icon: ReactIcon,
    description: "Hmm",
  },
  {
    name: "Typescript",
    icon: TypescriptIcon,
    description: "Hmm",
  },
  {
    name: "AWS",
    icon: AwsIcon,
    description: "Hmm",
  },
  {
    name: "OCaml",
    icon: OcamlIcon,
    description: `${(
      <InlineLink
        href="https://github.com/tjm165/Simon-Game"
        text="Simon Says game"
        rightSpace={false}
      />
    )}`,
  },
];

export default techCardData;
