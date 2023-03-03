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

const colors = [undefined, "primary", "primary"];
const variants = ["filled", "filled", "outlined"];

const getVariant = (i: any, list: any) => {
  const index = i % list.length;
  return list[index];
};

const timelineItems = [
  {
    title: "hi",
    paragraph: "p",
    date: "9:30 am",
    icon: <RepeatIcon />,
  },
  {
    title: "hi",
    paragraph: "p",
    date: "9:30 am",
    icon: <RepeatIcon />,
  },
  {
    title: "hi",
    paragraph: "p",
    date: "9:30 am",
    icon: <RepeatIcon />,
  },
  {
    title: "hi",
    paragraph: "p",
    date: "9:30 am",
    icon: <RepeatIcon />,
  },
  {
    title: "hi",
    paragraph: "p",
    date: "9:30 am",
    icon: <RepeatIcon />,
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
      {timelineItems.map((val, i) => (
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
  console.log(color, variant);
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
