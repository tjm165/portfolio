import { ReactNode, useState } from "react";
import data from "./data";
import Grid from "@mui/material/Grid";
import Modal from "../../common/Modal";
import Tech from "./Tech";
import TechCardPropTypes from "./type";

function TechCard({
  name,
  fullName,
  icon,
  backgroundColor,
  description,
}: TechCardPropTypes) {
  const [open, setOpen] = useState(false);

  return (
    <Grid item>
      <Modal open={open} setOpen={setOpen} title={fullName || name}>
        <div> {description}</div>
      </Modal>
      <Tech
        image={icon}
        backgroundColor={backgroundColor}
        onClick={() => setOpen(true)}
      />
    </Grid>
  );
}

export default function FavoriteTech() {
  return (
    <Grid container justifyContent={"space-evenly"} spacing={4}>
      {data.map((data, i) => (
        <TechCard key={i} {...data} />
      ))}
    </Grid>
  );
}
