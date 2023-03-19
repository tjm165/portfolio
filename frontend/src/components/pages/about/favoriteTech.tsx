import { useState } from "react";
import Paper from "@mui/material/Paper";
import techCardData from "./favoriteTechData";
import Box from "@mui/material/Box";
import Modal from "../../common/Modal";
import { InteractivePaper } from "../../common";

export type TechCardPropTypes = {
  name: string;
  icon: string;
  description: string;
};

function TechCard({ name, icon, description }: TechCardPropTypes) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} setOpen={setOpen} title={name}>
        <div> {description}</div>
      </Modal>
      <InteractivePaper onClick={() => setOpen(true)} elevation={3}>
        <img height="10px" width="10px" src={icon} />
        {name}
      </InteractivePaper>
    </>
  );
}

export default function FavoriteTech() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {techCardData.map((data, i) => (
        <TechCard key={i} {...data} />
      ))}
    </Box>
  );
}
