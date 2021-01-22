import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./components/ImageCard";
import EntryImage from '../../images/card-img.jpeg';
import Heather from '../../images/heather.jpg';
import AboutSection from "./components/AboutSection/AboutSection";
import Arian from '../../images/arian.jpg';
import Rachel from '../../images/Rachel.jpg';


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
        <Grid item xs={12}>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "var(--simple-blue)",
            }}>Team Simple Soul</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <AboutSection img={Heather} title='Heather Germaine'>
              <br></br>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  color: "var(--simple-blue)",
                }}
              >
                Heather Germaine
          </Typography>
              <Typography paragraph gutterBottom>
                Married to my best friend who supports all my crazy health ideas! I am a mom to 4 kids who I
                love and adore and are a big reason for my passion for Holistic Health. I want to make sure what
                I feed them is as close to its natural form as possible, I am by no means perfect, they still
                have junk here and there, but the goal is simple and natural. I believe with my whole heart food
                really is the best medicine. What we put in our mouths directly effects our overall health
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
            </AboutSection>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <AboutSection imgRight img={Arian} title='Heather Germaine'>
              <br></br>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  color: "var(--simple-blue)",
                }}
              >
                Arian
          </Typography>
              <Typography paragraph gutterBottom>
                I was born and raised into health. I had parents and grandparents who invested a lot of time and energy 
                into providing good whole foods for their children as well as a balanced lifestyle that promoted nutrition, 
                physical activity, and mental/emotional well-being. I will forever be grateful for that upbringing!
          </Typography>

              <Typography paragraph gutterBottom>
                I have always loved being active and love the endorphins that come with it! Being active has helped me keep up 
                with my always-on-the-move husband and our five children. There was a time when I was feeling pretty awful and 
                ended up doing a lot to fix my hormonal health. After working on my own health and learning more about how much 
                nutrition and lifestyle affect our hormones, I worked for a Bio-Identical Hormone specialist in one of his offices 
                in Scottsdale, Arizona. Since then I have incorporated the things I have learned into my life and the lives of my 
                husband and children. When we are eating healthy foods (the majority of the time), getting enough sleep, living an 
                active lifestyle, and making time to focus on our emotional health, we are all happier and have loads more energy to 
                enjoy life! That way of thinking has been reconfirmed as I have learned about and studied epigenetics (hair analysis). 
                I love helping others feel their best inside and out and feel like this is truly a way to do that!
          </Typography>
            </AboutSection>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <AboutSection img={Rachel} title='Rachel Ellenani'>
              <br></br>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  color: "var(--simple-blue)",
                }}
              >
                Rachel Ellenani
          </Typography>
              <Typography paragraph gutterBottom>
                Growing up with less fortune in Central Florida in a big family I learned how to live off the land.
                We grew and preserved food constantly. When I got older I began to realize what an important that has
                played in my life. I became a trainer before my 20s but my first child at 24 was my biggest teacher.
                He had eczema and reflux within weeks after birth. I had an epiphany while in a doctor's office with my baby.
                I drove home and changed my family's diet, our lifestyle and our environment to rid us of the toxins that were
                causing so many issues in our daily lives.
          </Typography>

              <Typography paragraph gutterBottom>
                I studied daily to learn everything I could about the human body and the mind.
                I became a Holistic Practitioner and started coaching clients in a whole new way.
                My passion lies with helping clients 1 on 1. Understanding where they want to be and what they want to achieve 
                drives me to find the personalized solutions they need.
                Epigentic Hair Analysis has now given me a power tool when I has using basic hand tools before. A lot of the guesswork 
                is taken out of helping clients on their health journey....and I'm in love!
          </Typography>
            </AboutSection>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
