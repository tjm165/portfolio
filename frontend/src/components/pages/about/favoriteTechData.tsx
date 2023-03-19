import ReactIcon from "./ReactIcon.svg";
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
    icon: ReactIcon,
    description: "Hmm",
  },
  {
    name: "Amazon Web Services",
    icon: ReactIcon,
    description: "Hmm",
  },
  {
    name: "OCaml",
    icon: ReactIcon,
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
