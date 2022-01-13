import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import Grid from "@mui/material/Grid";
import Myhome from "../image/isometric-office.gif";
export default function DatePresent() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div style={{boxShadow: "grey -2px 0px 1px"}}>
      <LocalizationProvider  dateAdapter={AdapterDateFns}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>

      <img alt="home" src={Myhome} width="300px" height="200px" />
      </div>
  );
}
