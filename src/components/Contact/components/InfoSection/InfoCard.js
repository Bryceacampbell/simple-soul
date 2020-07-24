import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FamilyIcon from "../../../SvgIcons/Family/FamilyIcon";

const InfoCard = ({icon, text, header}) => {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "row",
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
      marginRight: "1em",
    },
    media: {
      backgroundSize: "contain",
      margin: ".5em",
    },
  });
  const classes = useStyles();
  return (
    <Card raised className={classes.root}>
      <CardMedia className={classes.media}>
        <Grid container style={{height: '100%'}} alignItems="center">
         {icon}
        </Grid>
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5">
          {header}
        </Typography>
        <Typography gutterBottom variant="body1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
