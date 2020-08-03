import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./components/ImageCard";
import EntryImage from '../../images/card-img.jpeg';
import Heather from '../../images/heather.jpg';

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    marginBottom: 40
  },
  button: {
    background: "var(--simple-blue)",
    color: "#fff",
    float: "right",
    marginRight: 20,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: 80 }}>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} md={6}>
          <br></br>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "var(--simple-blue)",
            }}
          >
            Simple Soul
          </Typography>
          <Typography paragraph gutterBottom>
            Founded on the principles of Holistic Medicine we look at the mind, body and soul.
            Taking us back to our roots in keeping life simple. When the body is well balanced
            with proper nutrition, adequate exercise as well as rest, quality sleep and wholesome
            engagement for the mind the soul is happy. Looking at nourishing all systems to better
            optimize your health!!
          </Typography>

          <Typography paragraph>
            We are each so uniquely different. What works for one definitely doesn’t works for us all.
            Diving deep in your specific journey with your health we take a view at all different angles.
            Looking to identify key components to help improve your body’s ability to perform properly.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageCard image={EntryImage} title={"Holistic Health"} height={350} />
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} md={6}>
          <ImageCard image={Heather} title={"Heather Germaine"} height={500}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <br></br>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "var(--simple-blue)",
            }}
          >
            About Me
          </Typography>
          <Typography paragraph gutterBottom>
            Married to my best friend who supports all my crazy health ideas! I am a mom to 4 kids who I
            love and adore and are a big reason for my passion for Holistic Health. I want to make sure what
            I feed them is as close to its natural form as possible, I am by no means perfect, they still
            have junk here and there, but the goal is simple and natural. I believe with my whole heart food
            really is the best medicine. What we put in our mouths directly effects are overall health
            including our mind and soul and  our body's ability to adapt to all the stress life throws at us.
          </Typography>

          <Typography paragraph gutterBottom>
            I have been a trainer for a little over 5 years now and love to workout, but my mind has slightly
            focused over the years to be more mindful of my mental state and becoming more aware of where my
            energy is being spent. As I have put more focus on the foods that work right for my body, adapted
            meditation, along with cold ice bath therapy, I have felt more empowered and stronger both physically
            and mentally! I want to help others achieve a stronger state not just physically but mentally as well.
            Simple Soul Az a passion for getting back to the basics.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
