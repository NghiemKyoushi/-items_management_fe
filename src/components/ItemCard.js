import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DialogItem from "./DialogItem";
export default function ItemCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ImageList
      cols={4}
      gap={91}
      sx={{
        overflow: "hidden",
        width: "fit-content",
        height: "fit-content",
        paddingLeft: 4,
        paddingRight: 3,
      }}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          sx={{
            boxShadow: "-0.2px 0px 3px 1px #ced4de",
            paddingLeft: 2,
            width: "fit-content",
            borderRadius: "3px",
          }}
          key={index}
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: "3px", height: 190, width: 150 }}
            onClick={handleClickOpen}
          />
          <DialogItem open= {open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
          <ImageListItemBar
            title={item.title}
            subtitle={
              <div>
                <p className="usage">{item.usage}</p>
                <span style={{ width: 30 }}>{item.description}</span>
              </div>
            }
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://res.cloudinary.com/hanoi-university/image/upload/v1642124492/ip123714_00_yod1ua.jpg",
    title: "Sen đá",
    usage: "Trang tri",
    description: "do vat co the dung trang tri",
  },
  {
    img: "https://res.cloudinary.com/hanoi-university/image/upload/v1642124492/ip123714_00_yod1ua.jpg",
    title: "Sen đá",
    usage: "Trang tri",
    description: "do vat co the dung trang tri",
  },
];
