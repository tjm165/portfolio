import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineItems from "./timelineItemsData";

function Timeline() {
  return (
    <VerticalTimeline>
      {timelineItems.map(({ title, date, paragraph, location }, index) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date={date}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{location}</h4>
          {/* <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p> */}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
