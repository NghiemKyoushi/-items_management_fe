import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import { FormControl, makeStyles } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Divider from "@mui/material/Divider";
import SelectApplication from "./SelectApplication";

const useStyle = makeStyles(() => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
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

export default function DialogItem(props) {
  //   const [open, setOpen] = React.useState(false);
  const [file1, setFile1] = useState(null);

  const classes = useStyle();

  const onFileChange = (event) => {
    setFile1(URL.createObjectURL(event.target.files[0]));
    console.log("file", setFile1);
  };
  return (
    <div>
      <Dialog
        maxWidth="lg"
        fullWidth={true}
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle sx={{ color: "#1fc3ff" }}>Add new item</DialogTitle>
        <DialogContent>
          <div className="content">
            <Grid container>
              <Grid item xs={6}>
                <form className={classes.root}>
                  <div>
                    <label className="labelSize">name of item</label>
                    <br />
                    <TextField size="small" variant="outlined" />
                  </div>
                  <div>
                    <label className="labelSize">stand for item</label>
                    <br />
                    <TextField size="small" variant="outlined" />
                  </div>
                  <div>
                    <label className="labelSize">position</label>
                    <br />
                    <TextField size="small" variant="outlined" />
                  </div>
                  <div>
                    <label className="labelSize">expired date</label>
                    <br />
                    <TextField size="small" type="date" variant="outlined" />
                  </div>
                  <div>
                    <label className="labelSize">choose application</label>
                    <br />
                    <SelectApplication />
                  </div>
                  <div>
                    <label className="labelSize">description</label>
                    <br />
                    <TextareaAutosize
                      aria-label="empty textarea"
                      style={{ width: 1150, height: 100, borderRadius: "10px" }}
                    />
                  </div>
                </form>
              </Grid>
              <Grid item xs={4}>
                <div
                  style={{
                    marginLeft: 118,
                    marginTop: 40,
                    maxWidth: "100%",
                    width: "fit-content",
                    maxHeight: "50%",
                  }}
                >
                  <label htmlFor="btn-upload">
                    <input
                      id="btn-upload"
                      name="btn-upload"
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                      onChange={onFileChange}
                    />
                    <img
                      width="296"
                      height="275"
                      src={
                        file1
                          ? file1
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_fAACs6UF4F8AHUPEpLpzWdt1hmme9u6zQoRk7iLabIRkC6VnBLGltFfiXJo4rw16Ps&usqp=CAU"
                      }
                      alt=""
                    />
                    <br />
                    <Button
                      className="btn-choose"
                      variant="outlined"
                      component="span"
                    >
                      Choose Image
                    </Button>
                  </label>
                </div>
                <div></div>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <Divider/>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button onClick={props.handleClose} size="small" variant="outlined">
            cancel
          </Button>
          <Button
            onClick={props.handleClose}
            size="small"
            variant="contained"
            sx={{ color: "#ffff", background: "#1fc3ff" }}
          >
            save and add item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
