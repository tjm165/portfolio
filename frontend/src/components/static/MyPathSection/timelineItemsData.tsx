import { ReactElement } from "react";
import { InlineLink } from "../../common";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { Divider } from "semantic-ui-react";

type TimelineItem = {
  title: string;
  date: string;
  paragraph: ReactElement | string;
  icon: any;
  location: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: "Fourth Grade",
    date: "2009 - 2010",
    location: "Cleveland, OH",
    icon: <CodeIcon />,
    paragraph:
      'To find a way around my parents "no video games on weeknights" rule, I decided to create my own video game. This led to my discovery of coding and web-hosting. Over time, I was developing an understanding of how software works.',
  },
  {
    title: "Middle School",
    date: "2011 - 2013",
    location: "Cleveland, OH",
    icon: <CodeIcon />,
    paragraph:
      "With a growing passion for computer programming I signed up for my school's computer class. However, I was disappointed to find that the class only covered the basics of the Microsoft suite. To pursue my interest, I turned to watching YouTube tutorials to learn more about software. During my class time, I would secretly write code which I could then share with my friends.",
  },
  {
    title: "High School",
    date: "2013 - 2017",
    location: "Cleveland, OH",
    icon: <CodeIcon />,
    paragraph: (
      <>
        I was eager to expand my programming skills and began to learn
        JavaScript. I enrolled in a summer boot camp but made a rookie mistake
        by signing up for a Java course instead of a JavaScript course. With the
        knowledge I learned from this course I was able to write a simple
        <InlineLink
          href="https://github.com/tjm165/Simon-Game"
          text="Simon Says game."
          rightSpace={false}
        />
      </>
    ),
  },
  {
    title: "College, Case Western Reserve University",
    date: "2017 - 2021",
    location: "Cleveland, OH",
    icon: <SchoolIcon />,
    paragraph: (
      <>
        I earned my bachelors of science in computer science, as well as minors
        in economics and business management. As a resident assistant, I had the
        privilege of mentoring freshmen students. I was also fortunate to have
        served as the
        <InlineLink
          href="https://engineering.case.edu/news/spartan-showcase-featuring-tommy-moawad"
          text="President of the Case Engineers Council."
        />
        I gained industry experience through internships at
        <InlineLink
          href="https://www.mckinsey.com/"
          text="McKinsey & Company"
        />
        and
        <InlineLink
          href="https://www.frontlineeducation.com/special-ed-software/"
          text="ProgressBook (now Frontline Education)."
          rightSpace={false}
        />
        These opportunities enabled me to sharpen my technical, leadership, and
        business skills.
      </>
    ),
  },
  {
    title: "McKinsey & Company",
    date: "2021 - Current",
    location: "Chicago, IL",
    icon: <WorkIcon />,
    paragraph: (
      <>
        <div>
          <strong>Engineer 2 - Low Code Platform</strong>
          <p>
            Currently building a low code platform to eneble non-techincal
            collegues to create technology.
          </p>
        </div>
        <Divider />

        <div>
          <strong>Engineer 1 - Security Platform</strong>
          <p>
            I started my career on McKinsey's identity and access management
            platform. This is a core technology that protects most of the firm's
            software products. This is a unique challenge within the identity
            space, due to the McKinsey's distinctive emphasis on maintaining
            client confidentiality. Specifically I developed a frontend for
            admin access, a data pipeline, and the full stack forgot password
            functionality.
          </p>
        </div>
      </>
    ),
  },
];

export default timelineItems;
