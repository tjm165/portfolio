import { SimpleSection } from "../../common/section";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { debug } from "console";

const colors = [undefined, "primary", "primary"];
const variants = ["filled", "filled", "outlined"];

const getVariant = (i: any, list: any) => {
  const index = i % list.length;
  return list[index];
};

const timelineItems = [
  {
    title: "Fourth Grade",
    date: "2009 - 2010",
    paragraph:
      "My parents instituted a rule preventing me from playing video games on weeknights. To find a way around this rule, I decided to create my own video game. This required me to learn about coding and web hosting. As my understanding of what goes into a website started to take form, I was able to incrementally build my game. Over time, I turned it into an HTML website where each image clicked would lead to different webpages that represented various game states.",
    icon: <RepeatIcon />,
  },
  {
    title: "Middle School",
    date: "2011 - 2013",
    paragraph:
      "With a growing passion for computer programming I signed up for my school's computer class. However, I was disappointed to find that the class only covered the basics of the Microsoft suite. To pursue my interest, I turned to watching YouTube videos on programming in bash. During my class time, I would secretly create batch files that prompted users for inputs like their name and favorite color, and then responded accordingly. This allowed me to gain knowledge on inputs, conditional statements, loops, and the infamous `goto` command. Several of my classmates took interest in my project. During lunch, I took the opportunity to share my learnings with them.",
    icon: <RepeatIcon />,
  },
  {
    title: "High School",
    date: "2013 - 2017",
    paragraph: (
      <>
        I was eager to expand my programming skills beyond the limitations of
        bash, most notably its inability to be hosted on the web. To pursue web
        programming, I began learning JavaScript, which proved to be quite
        challenging. Seeking structured guidance, I enrolled in a summer boot
        camp but made a rookie mistake by signing up for a Java course instead
        of a JavaScript course. Nonetheless, I was able to learn the basics of
        Java programming and demonstrated my knowledge by creating a {""}
        <a href="https://github.com/tjm165/Simon-Game" target="_blank">
          Simon Says game
        </a>
        .
      </>
    ),

    icon: <RepeatIcon />,
  },
  {
    title: "College, Case Western Reserve University",
    date: "2017 - 2021",
    paragraph: <>Internship at progress book Interneship at McKinsey</>,
  },
  {
    title: "McKinsey & Company",
    date: "2021 - Current",
    paragraph: (
      <>Engineer 1 on auth Engineer 2 on auth Engineer 2 on no code pro code</>
    ),
  },
];

export default function Contact() {
  return (
    <Container maxWidth="lg">
      <SimpleSection headingText="About Me">
        <CustomizedTimeline />
      </SimpleSection>
    </Container>
  );
}

export function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {timelineItems
        .slice()
        .reverse()
        .map((val, i) => (
          <Record
            key={i}
            {...val}
            color={getVariant(i, colors)}
            variant={getVariant(i, variants)}
          />
        ))}
    </Timeline>
  );
}

function Record({ color, variant, date, title, paragraph, icon }: any) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={color} variant={variant}>
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography>{paragraph}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
