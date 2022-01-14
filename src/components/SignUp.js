import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import houseImg from "../image/isometric-office.gif";
import catImg from "../image/hi.png";
import TextField from '@mui/material/TextField';
export default function SignUp() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <div className="imgContainer">
            <p className="welcome">WELCOME TO </p>
            <h2 className="product">NEW PRODUCT TEAM</h2>
            <hr />
            <img className="imgHouse" src={houseImg} alt="" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="formSignUp">
            <div className="signUp">
              <p>SIGN-UP</p> 
            </div>
            <img className="imgCat" src={catImg} alt="" width={120} height={120} /> 
            <p className="here" >HERE!</p>

            <form>
            <input/>
            </form>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
