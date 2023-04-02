import Typography from "@mui/material/Typography";
import { ReactElement } from "react";
import { InlineLink } from "../../common";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

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
      "My parents instituted a rule preventing me from playing video games on weeknights. To find a way around this rule, I decided to create my own video game. This required me to learn about coding and web hosting. As my understanding of what goes into a website started to take form, I was able to incrementally build my game. Over time, I turned it into an HTML website where each image clicked would lead to different webpages that represented various game states.",
  },
  {
    title: "Middle School",
    date: "2011 - 2013",
    location: "Cleveland, OH",
    icon: <CodeIcon />,
    paragraph:
      "With a growing passion for computer programming I signed up for my school's computer class. However, I was disappointed to find that the class only covered the basics of the Microsoft suite. To pursue my interest, I turned to watching YouTube videos on programming in bash. During my class time, I would secretly create batch files that prompted users for inputs like their name and favorite color, and then responded accordingly. This allowed me to gain knowledge on inputs, conditional statements, loops, and the infamous `goto` command. Several of my classmates took interest in my project. During lunch, I took the opportunity to share my learnings with them.",
  },
  {
    title: "High School",
    date: "2013 - 2017",
    location: "Cleveland, OH",
    icon: <CodeIcon />,
    paragraph: (
      <>
        I was eager to expand my programming skills beyond the limitations of
        bash, most notably its inability to be hosted on the web. To pursue web
        programming, I began learning JavaScript, which proved to be quite
        challenging. Seeking structured guidance, I enrolled in a summer boot
        camp but made a rookie mistake by signing up for a Java course instead
        of a JavaScript course. Nonetheless, I was able to learn the basics of
        Java programming and demonstrated my knowledge by creating a {""}
        <InlineLink
          href="https://github.com/tjm165/Simon-Game"
          text="Simon Says game"
          rightSpace={false}
        />
        .
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
          text="President of the Case Engineers Council"
        />
        Furthermore I gained industry experience through internships at
        <InlineLink
          href="https://www.mckinsey.com/"
          text="McKinsey & Company"
        />
        and
        <InlineLink
          href="https://www.frontlineeducation.com/special-ed-software/"
          text="ProgressBook (now Frontline Education)"
          rightSpace={false}
        />
        . These opportunities enabled me to sharpen my technical, leadership,
        and business skills.
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
          <Typography variant="subtitle1" component="span">
            Engineer 2 - Low Code Platform
          </Typography>
          <p>
            Currently building a low code platform to eneble non-techincal
            collegues to create technology.
          </p>
        </div>
        <div>
          <Typography variant="subtitle1" component="span">
            Engineer 1 - Security Platform
          </Typography>
          <p>
            I developed the Firm's identity and access management platform. This
            was an essential core technology that is utilized in most of the
            firm's software products. This was a unique challenge within the
            identity space, due to the Firm's was created by its distinctive
            emphasis on maintaining client confidentiality. I Specifically
            developed a frontend for admin access, a data pipeline, and the
            forgot password functionality.
          </p>
        </div>
      </>
    ),
  },
];

export default timelineItems;