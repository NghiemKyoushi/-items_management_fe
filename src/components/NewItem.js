import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { FormControl, makeStyles } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const useStyle = makeStyles(() => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      height: "30%",
      margin: useTheme().spacing(0.5),
    },
    "& .MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
      {
        height: "30%",
        borderRadius: "40px",
      },
  },
}));

export default function NewItem() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new item
      </Button>
      <Dialog maxWidth="lg" fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>Add new item</DialogTitle>
        <DialogContent>
          <div className="content">
            <Grid container>
              <Grid item xs={6}>
                <form className={classes.root}>
                  <div>
                    <label>Name</label>
                    <br />
                    <TextField size="small" variant="outlined" />
                  </div>
                  <div>
                    <label>Name</label>
                    <br />
                    <TextField size="small" variant="outlined" />
                  </div>
                  <div>
                    <label>Name</label>
                    <br />
                    <TextField size="small" variant="outlined" />
                  </div>
                  <div>
                    <label>Name</label>
                    <br />
                    <TextField size="small" type="date" variant="outlined" />
                  </div>
                  <div>
                    <label>Name</label>
                    <br />
                    <TextField size="small" variant="outlined" />
                  </div>
                  <div>
                    <TextareaAutosize
                      aria-label="empty textarea"
                      placeholder="Empty"
                      style={{ width: 1000, height: 100 }}
                    />
                  </div>
                </form>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <label>Name</label>
                  <TextField size="small" variant="outlined" />
                </div>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
