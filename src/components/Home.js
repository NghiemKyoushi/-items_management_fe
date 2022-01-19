import React from 'react';
import ItemCard from "./ItemCard";
import DatePresent from "./DatePresent";
import NewItem from "./NewItem";
import HomeCard from "./HomeCard";
import Grid from "@mui/material/Grid";

export default function Home(props) {

    return (
        <>
            {props.visitHome ? (
          <>
            {props.checkUser ? <NewItem getAllItem={props.getAllItem}/> : ""}

            <Grid container spacing={1}>
              <Grid item xs={9}>
                <HomeCard homeData={props.allUser} />
              </Grid>
              <Grid item xs={2}>
                <DatePresent />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {props.checkUser ? <NewItem getAllItem={props.getAllItem} /> : ""}

            <Grid container spacing={1}>
              <Grid item xs={9}>
                {props.checkUser ? (
                  <ItemCard itemData={props.item} getAllItem={props.getAllItem} />
                ) : (
                  "Log in to access your home"
                )}
              </Grid>
              <Grid item xs={2}>
                <DatePresent />
              </Grid>
            </Grid>
          </>
        )}
        </>
    )
}