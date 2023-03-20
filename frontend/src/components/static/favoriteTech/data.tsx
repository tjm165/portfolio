import ReactIcon from "./logos/react.svg";
import TypescriptIcon from "./logos/typescript.svg";
import AwsIcon from "./logos/aws.svg";
import OcamlIcon from "./logos/ocaml.svg";
import GoLogo from "./logos/go.png";
import TerraformLogo from "./logos/terraform.svg";
import TechCardPropTypes from "./type";
import { InlineLink } from "../../common";

// Logos from https://logosear.ch/logos/typescript/index.html

const data: TechCardPropTypes[] = [
  {
    name: "AWS",
    fullName: "Amazon Web Services",
    icon: AwsIcon,
    description:
      "I have a certification as an AWS Cloud Practitioner and am pursuing the AWS Solutions Architect certificate. With regards to my professional experience, I have successfully designed several intricate systems, including McKinsey's forgot password UI and API as well as their data ingestion system. In designing these systems, security and reliability were critical factors. I enjoy working with AWS's serverless technologies, and continually strive to enhance my skills in this domain.",
  },
  {
    name: "React",
    icon: ReactIcon,
    description:
      "I gained my exposure to React experience at hackathon in 2018. Since then it has become a central component to my skill set as a full stack engineer. I have leveraged this knowledge to develop and React-based applications in various professional settings, including McKinsey and ProgressBook.",
  },
  {
    name: "Typescript",
    icon: TypescriptIcon,
    description:
      "As a developer, I am deeply committed to writing high-quality code that adheres to industry best practices. In utilizing Typescript, I have been able to leverage its powerful type system to ensure the robustness and reliability of my applications. I also prioritize the utilization of automated testing frameworks, such as Jest, to further guarantee the stability and quality of the software I develop.",
  },
  {
    name: "Terraform",
    icon: TerraformLogo,
    description: "",
  },

  {
    name: "OCaml",
    icon: OcamlIcon,
    description: (
      <>
        <p>
          {" "}
          Despite being used in only{" "}
          <InlineLink
            href="https://madnight.github.io/githut/#/pull_requests/2022/1"
            text="0.244% of all code on Github,"
            rightSpace={true}
          />
          OCaml has played a crucial role in several high profile companies,
          such as
          <InlineLink
            href="https://sandny.com/2018/12/18/why-did-facebook-pick-ocaml/"
            text="Facebook Messenger,"
            leftSpace={true}
            rightSpace={true}
          />
          <InlineLink
            href="https://www.bloomberg.com/company/stories/bucklescript-1-0-release-arrived/"
            text="Bloomberg,"
            leftSpace={true}
            rightSpace={true}
          />
          and
          <InlineLink
            href="https://ocaml.org/success-stories/large-scale-trading-system"
            text="Jane Street's trading systems."
            leftSpace={true}
            rightSpace={true}
          />
        </p>
        <p>
          The key benefits to OCaml are that it is functional (like Typescript
          and Python) but compiled (like C). Furthermore, it has a stricter type
          system than Java, or Typescript. This enables high performance,
          maintainable, and reliable code.
        </p>
        <p>
          Learning OCaml can be a challenging, particularly due to the lack of
          comprehensive community and online resources devoted to the language.
          By taking on this task, I can demonstrate not only my proficiency in
          OCaml, but also my willingness to take on new and difficult
          challenges. This can showcase my versatility and adaptability as a
          programmer, which are highly valued skills in the technology industry.
        </p>
      </>
    ),
  },
  {
    name: "Go-lang",
    icon: GoLogo,
    description: "",
  },
];

export default data;
