import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
import axios from "axios";

export default function CommentForm(props) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const submitComment = async (e) =>  {
      e.preventDefault();
    //   const body ={
    //       userID: props.userID,
    //       body: text,
    //       username: localStorage.getItem("username"),
    //       parentId: ""

    //   }
    //   const sendComment = await axios.post("http://localhost:3030/comment/addComment", body);
    //   console.log("sendComment", sendComment.data.message);

  }
  const submitReply =  async (e) =>  {
    const body ={
        userID: props.userID,
        body: text,
        username: localStorage.getItem("username"),
        parentId: props.parentId
    }
    const sendComment = await axios.post("http://localhost:3030/comment/addComment", body);
    console.log("sendComment", sendComment.data.message);

}
  return (
    <>
      <div className={props.labelButton === "Reply" ? "Reply" : ""}>
      <form onSubmit={props.labelButton === "Reply" ? submitReply : submitComment }>
        <TextareaAutosize
          required
          onChange={handleChangeText}
          aria-label="empty textarea"
          style={{
            width: 950,
            height: 100,
            borderRadius: "10px",
            marginTop: 5,
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          {props.labelButton}
        </Button>
        {
            props.labelButton === "Reply" ?
            <Button onClick={()=> props.cancelReply()} variant="contained" color="error">
          cancel
        </Button>
            :""
        }
        </form>
      </div>
    </>
  );
}
