import { ReactNode, useState } from "react";
import data from "./data";
import Grid from "@mui/material/Grid";
import Modal from "../../common/Modal";
import Tech from "./Tech";
import TechCardPropTypes from "./type";

function TechCard({ name, fullName, icon, description }: TechCardPropTypes) {
  const [open, setOpen] = useState(false);

  return (
    <Grid item>
      <Modal open={open} setOpen={setOpen} title={fullName || name}>
        <div> {description}</div>
      </Modal>
      <Tech title={name} image={icon} onClick={() => setOpen(true)} />
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
