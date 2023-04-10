import ReactIcon from "./logos/react.png";
import TypescriptIcon from "./logos/typescript.svg";
import AwsIcon from "./logos/aws.webp";
import OcamlIcon from "./logos/ocaml.png";
import TerraformLogo from "./logos/terraform.png";
import TechCardPropTypes from "./type";
import { InlineLink } from "../../common";

const data: TechCardPropTypes[] = [
  {
    name: "Amazon Web Services",
    icon: AwsIcon,
    description:
      "As a certified AWS Cloud Practiioner, I have designed complex systems such as McKinsey's forgot password functionality. My interest lies in utilizing AWS's serverless technologies to create reliable and secure architectures. I first experimented with AWS as a personal challenge outside of my college coursework.",
  },
  {
    name: "React",
    icon: ReactIcon,
    description:
      "I was first exposed to React experience at hackathon in 2018. Since then it has become core skill to my full stack software engineering expertise. I have used this knowledge to develop React-based frontends at McKinsey and ProgressBook.",
  },
  {
    name: "Typescript",
    icon: TypescriptIcon,
    description:
      "I have found that pairing Typescript's type safety with a automated testing frameworks like Jest elevates the entire team by promoting consistency, and standardization. This, in return leads to increased team efficiency.",
  },
  {
    name: "Terraform",
    icon: TerraformLogo,
    description:
      "As a full stack software engineer, I recognize the critical role of Infrastructure as Code (IaC) tools like Terraform in deploying system architecture. I have written Terraform code for several systems at McKinsey to manage serverless AWS architectures.",
  },

  {
    name: "OCaml",
    icon: OcamlIcon,
    description: (
      <>
        <p>
          {" "}
          While only used by{" "}
          <InlineLink
            href="https://madnight.github.io/githut/#/pull_requests/2022/1"
            text="0.244% of all code on Github,"
            rightSpace={true}
          />
          OCaml is used at several high profile companies like
          <InlineLink
            href="https://sandny.com/2018/12/18/why-did-facebook-pick-ocaml/"
            text="Facebook Messenger,"
            leftSpace={true}
            rightSpace={true}
          />
          and
          <InlineLink
            href="https://ocaml.org/success-stories/large-scale-trading-system"
            text="Jane Street."
            leftSpace={true}
            rightSpace={true}
          />
          Like Typescript, OCaml is a functional language. Yet, like C, it is
          compiled. This best of both worlds leads to high performance and
          reliable code. OCaml can be challenging due to the lack of learning
          resources. I saw this as a chance to demonstrate my adaptability and
          willingness to tackle new challenges.
        </p>
      </>
    ),
  },
];

export default data;
