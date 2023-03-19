import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const InteractivePaper = styled(Paper)(({ theme }) => ({
  padding: "1rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default InteractivePaper;
