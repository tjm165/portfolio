import { ReactNode, useState } from "react";
import techCardData from "./favoriteTechData";
import Grid from "@mui/material/Grid";
import Modal from "../../common/Modal";
import { SquareCard } from "../../common";

export type TechCardPropTypes = {
  name: string;
  fullName?: string;
  icon: string;
  description: ReactNode;
};

function TechCard({ name, fullName, icon, description }: TechCardPropTypes) {
  const [open, setOpen] = useState(false);

  return (
    <Grid item>
      <Modal open={open} setOpen={setOpen} title={fullName || name}>
        <div> {description}</div>
      </Modal>
      <SquareCard title={name} image={icon} onClick={() => setOpen(true)} />
    </Grid>
  );
}

export default function FavoriteTech() {
  return (
    <Grid container justifyContent={"space-evenly"} spacing={4}>
      {techCardData.map((data, i) => (
        <TechCard key={i} {...data} />
      ))}
    </Grid>
  );
}
