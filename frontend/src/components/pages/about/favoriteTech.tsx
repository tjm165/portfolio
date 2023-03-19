import { useState } from "react";
import Paper from "@mui/material/Paper";
import techCardData from "./favoriteTechData";
import Box from "@mui/material/Box";
import Modal from "../../common/Modal";
import Typography from "@mui/material/Typography";
import { SquareCard } from "../../common";

//
import { styled } from "@mui/material/styles";

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

//

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
      <SquareCard title={name} image={icon} onClick={() => setOpen(true)} />
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
          width: "100%",
        },
      }}
    >
      {techCardData.map((data, i) => (
        <TechCard key={i} {...data} />
      ))}
    </Box>
  );
}
