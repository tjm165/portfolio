import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineItems from "./timelineItemsData";

function Timeline() {
  const flipped = timelineItems.reverse();

  return (
    <VerticalTimeline>
      {flipped.map(({ title, icon, date, paragraph, location }, index) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "white", color: "#333" }}
          date={date} // yes I intentionally flip flopped this because I think it looks better
          icon={icon}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{location}</h4>

          <p>{paragraph}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
