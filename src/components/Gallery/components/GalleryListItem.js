import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
    borderRadius: 10,
  },
  media: {
    height: 350,
  },
}));

const ListItem = ({ img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/simplesoulaz/">
        <CardMedia className={classes.media} image={img} />
      </a>
    </Card>
  );
};

export default ListItem;
