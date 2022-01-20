import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

import {
  CardMedia,
  Typography,
  Card,
  CardActions,
  Button,
} from "@mui/material";
import CommentForm from "./CommentForm";

export default function Comment(props) {
  const [isReply, setIsReply] = useState(false);
  const [reply, setReply] = useState([]);
  const getReplies = (commentId) =>
    props.comments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  useEffect(() => {
    setReply(getReplies(props.comment._id));
  }, [props.comments]);

  const cancelReply = () => {
      setIsReply(false)
  }
  return (
    <>
      <Card
        id="cardComment"
        sx={{ display: "flex", width: "60%", marginTop: 3 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <CardMedia
            component="img"
            sx={{ width: 50 }}
            image="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {props.comment.userName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {props.comment.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => setIsReply(true)}
            >
              Reply
            </Button>
          </CardActions>
        </Box>
      </Card>
      {reply.length > 0
        ? reply.map((reply) => (
            <Card
             key={reply._id}
              className="cardReply"
              id="cardComment"
              sx={{ display: "flex", width: "60%", marginTop: 3 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 50 }}
                  image="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"
                  alt="Live from space album cover"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    {reply.userName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {reply.body}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))
        : ""}

      {isReply ? <CommentForm cancelReply={cancelReply} parentId={props.comment._id} labelButton="Reply" /> : ""}
    </>
  );
}
