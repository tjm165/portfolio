import React, { ReactNode, useState } from "react";
import { Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

type PropTypes = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
};

function MyModal({ open, setOpen, title, children }: PropTypes) {
  const handleClose = () => setOpen(false);

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>{title}</Modal.Header>
      {children}
    </Modal>
  );
}

export default MyModal;
