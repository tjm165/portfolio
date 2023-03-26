import { ReactNode, useState } from "react";
import data from "./data";
import Grid from "@mui/material/Grid";
import MyModal from "../../common/Modal";
import { Image, Modal } from "semantic-ui-react";
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
      <MyModal open={open} setOpen={setOpen} title={fullName || name}>
        <Modal.Content image>
          <Image size="medium" src={icon} wrapped />
          <Modal.Description>{description}</Modal.Description>
        </Modal.Content>
      </MyModal>
      <Tech
        image={icon}
        backgroundColor={backgroundColor}
        onClick={() => setOpen(true)}
      />
    </Grid>
  );
}

export default function MyFavoriteTech() {
  return (
    <Grid container justifyContent={"space-evenly"} spacing={4}>
      {data.map((data, i) => (
        <TechCard key={i} {...data} />
      ))}
    </Grid>
  );
}
