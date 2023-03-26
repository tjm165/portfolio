import React, { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type PropTypes = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
};

const StyledModal = styled(MuiModal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledPaper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  maxWidth: "80vw",
  width: "auto",
  maxHeight: "80vh",
  height: "auto",
  overflowY: "scroll",
  position: "relative",
  [theme.breakpoints.down("xs")]: {
    maxWidth: "100vw",
    maxHeight: "100vh",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

function Modal({ open, setOpen, title, children }: PropTypes) {
  const handleClose = () => setOpen(false);

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledPaper>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <Typography id="modal-modal-title" component="h1" variant="h4">
          {title}
        </Typography>
        {children}
      </StyledPaper>
    </StyledModal>
  );
}

export default Modal;
