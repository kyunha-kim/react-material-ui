import { Edit } from "@mui/icons-material";
import {
  Box,
  Fab,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Create = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        title="craete"
        sx={{ position: "fixed", bottom: "20px", right: "30px" }}
      >
        <IconButton>
          <Fab color="secondary" onClick={handleOpen}>
            <Edit />
          </Fab>
        </IconButton>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6">
            Text in a modal
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Create;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "4px",
};
