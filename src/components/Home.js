import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import DatePresent from "./DatePresent";
import NewItem from "./NewItem";
import HomeCard from "./HomeCard";
import Grid from "@mui/material/Grid";
import CommentForm from './CommentForm'
import Comment from "./Comment";
import axios from "axios";

export default function Home(props) {

  const [comments, setComments] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [userID, setUerID] = useState(localStorage.getItem("uid"));
  useEffect(() => {
    getComments(localStorage.getItem("uid"));
  }, [localStorage.getItem("uid")]);

  const getComments = async (id) => {
    const result = await axios.get(`http://localhost:3030/comment/getAllComment/${id}`);
    let arrCmt = [];
    arrCmt = result.data.comment.filter((cmt) => cmt.parentId.toString() === "").sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    console.log("comment", arrCmt);
    setComments(arrCmt);
    setAllComments(result.data.comment)
    // console.log("comment",result.data.comment);
  }
  return (
    <>
      {props.visitHome ? (
        <>
          {props.checkUser ? <NewItem getAllItem={props.getAllItem} /> : ""}

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

              <div>
                <h3>Comment</h3>
                <CommentForm labelButton="Send" getComments={getComments} />
                {
                  comments ?
                    comments.map((cmt) => (
                      <Comment comment={cmt} userID={userID} comments={allComments} key={cmt._id} getComments={getComments} />
                    ))
                    :
                    ""
                }
              </div>
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