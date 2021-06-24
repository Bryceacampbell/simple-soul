import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import ImageCard from '../../../Home/components/ImageCard'

const useStyles = makeStyles(theme => ({
    one: {
        [theme.breakpoints.down('md')]: {
            order: 1
        }
    },
    two: {
        [theme.breakpoints.down('md')]: {
            order: 2
        }
    },
}))
const AboutSection = ({ imgRight, img, title, children }) => {
    const classes = useStyles();
    return (
        <>
            {/* <ImageCard image={Heather} title={"Heather Germaine"} height={500} /> */}
            {/*   <br></br>
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
          </Typography> */}
            <Grid item className={imgRight ? classes.two : null} xs={12} md={6}>
                {imgRight ? (children) : (<ImageCard image={img} title={title} height={500} />)}

            </Grid>
            <Grid className={imgRight ? classes.one : null} style={imgRight ? { display: 'flex', alignItems: 'center' } : null} item xs={12} md={6}>
                {imgRight ? (<ImageCard image={img} title={title} height={500} />) : (children)}
            </Grid>
        </>
    )
}

export default AboutSection
