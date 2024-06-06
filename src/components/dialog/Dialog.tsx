import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Dialog as MuiDialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import LoadingOverlay from "../overlays/LoadingOverlay";

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
  },
}));

interface DialogProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Dialog = (props: DialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
    props.onClose && props.onClose();
  };

  return (
    <StyledDialog
      fullWidth
      aria-labelledby="customized-dialog-title"
      open={open}
      PaperProps={{
        style: { position: "relative" },
      }}
    >
      <LoadingOverlay loading={loading} text={"Creating user credentials..."} />
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {props.title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{props.children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default Dialog;
