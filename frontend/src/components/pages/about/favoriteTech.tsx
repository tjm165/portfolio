import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import techCardData from "./favoriteTechData";

export type TechCardPropTypes = {
  name: string;
  icon: string;
  description: string;
};

function TechCard({ name, icon, description }: TechCardPropTypes) {
  return (
    <Paper elevation={3}>
      <img height="10px" width="10px" src={icon} />
      {name}
      {description}
    </Paper>
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
