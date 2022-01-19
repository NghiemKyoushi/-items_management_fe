import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import DatePresent from "./DatePresent";
import NewItem from "./NewItem";
import HomeCard from "./HomeCard";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Divider, Paper } from "@material-ui/core";
import TextareaAutosize from "@mui/material/TextareaAutosize";
export default function FriendHome() {
  const [detail, detailHome] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    console.log("hahaha", id);
    getAllItemFriend(id);
  }, [id]);
  const getAllItemFriend = async (id) => {
    console.log("jdjdjdjd");
    const result = await axios.get(
      `http://localhost:3030/item/getAllItem/${id}`
    );
    const data = result.data.cart;
    const formatDate = data.map((item) => {
      var startTime = new Date(item.expired_date);
      item.expired_date = startTime.toISOString().substring(0, 10);
      return item;
    });
    console.log(formatDate);
    detailHome(formatDate);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <ItemCard itemData={detail} />
          <Divider />
          <div>
            <h3>Comment</h3>
            <TextareaAutosize
              aria-label="empty textarea"
              style={{ width: 1000, height: 100, borderRadius: "10px" }}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <DatePresent />
        </Grid>
      </Grid>
    </>
  );
}
