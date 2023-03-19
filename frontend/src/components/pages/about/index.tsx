import { SimpleSection } from "../../common/section";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useTitle } from "../../../hooks";
import timelineItemsData from "./timelineItemsData";

const colors = [undefined, "primary", "primary"];
const variants = ["filled", "filled", "outlined"];

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

export function CustomizedTimeline() {
  const getVariant = (i: any, list: any) => {
    const index = i % list.length;
    return list[index];
  };

  return (
    <Timeline position="alternate">
      {timelineItemsData
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

export default function About() {
  const title = "About Me";
  useTitle(title);

  return (
    <Container maxWidth="lg">
      <SimpleSection headingText={title}>
        <CustomizedTimeline />
      </SimpleSection>
    </Container>
  );
}
