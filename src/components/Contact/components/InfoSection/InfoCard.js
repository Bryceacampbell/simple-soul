import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const InfoCard = () => {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      width: '25rem'
    },
    content: {
      flexGrow: 1,
      padding: ".75em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    btn: {
      float: "right",
      marginRight: '1em'
    },
    media: {
      backgroundSize: 'contain',
      margin: '.5em'
    }
  });
  const classes = useStyles();
  return (
    <Card raised className={classes.root}>
      <CardMedia className={classes.media}
        style={{ height: "170px", width: "125px" }}
        image={`https://www.klipfolio.com/sites/default/files/blog/calendly-logo.png`}
      ></CardMedia>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5">Book today!</Typography>
        <Typography gutterBottom variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, quae?
        </Typography>
        <div>
          <Button className={classes.btn} variant="outlined">Book Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
