import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import TestimonialListItem from './TestimonialListItem';

const reviews = [
    {
        id: 1,
        name: 'Melanie',
        review: 'Hair analysis test was worth the money and time. Reason is I discovered depletion in minerals affecting my sleep patterns. Cody has issues with his stomach and it took Heather advising him to eat on a regular basis  and supplementing with vitamins and minerals. My boys are active and I felt it important for them to get tested to Achieve their optimal performance on the football field. Case found he wasn’t taking sufficient amount of Amino acids for proper muscle recovery.Cutter discovered a parasite affecting weight gain. Sy struggling in absorbing nutrients from food intake causing stomach issues.  Momma Hatch became informed in the direction her family needed to get healthy. Sure grateful for Heathers knowledge in the human body and how we can all feel better naturally.',
        imgUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/109731202_912981129204357_5966912476554460652_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=LLnN5xxqJtYAX9OftSy&_nc_ht=scontent-lax3-1.xx&oh=2d7e5f11a216994e2f859f5a66a7d0de&oe=5F3DBAC7",
        animationDir: 'right'

    },
    {
        id: 2,
        name: 'Arian',
        review: 'I was not sure what to expect from a hair analysis and had never met Heather. From the moment my kids and I arrived she made us feel comfortable and excited to find out more about our personal health. I had some specific questions and concerns and Heather answered them and helped me and my kids understand but not feel overwhelmed. I was grateful for Heather’s knowledge and the great way she explained things to me and my kids. We came away with a much clearer understanding of our own unique health and a plan for what to work on to feel better and have stronger immune systems. I love that the analysis provides ideas and ways to help fix the areas that are lacking with real food and practical things rather than synthetic drugs or tons of supplements. The analysis and explanations from Heather helped me to have a clearer vision of what I can do for my own health and for my family too. Excited to see the changes take affect for my whole family!',
        imgUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/110210448_1176979839326042_7645475180163295612_n.jpg?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=4JL-1VtODtIAX_yAaDt&_nc_ht=scontent-lax3-2.xx&oh=7092dcb14eb7c946c045d1cae2f450fe&oe=5F3C1FBE",
        animationDir: 'left'
    },
    {
        id: 3,
        name: 'JoLynn',
        review: 'From the moment we walked in it was such a wonderful experience. The process was painless and easy and so informative. I couldn’t believe that she was able to give us so much information about our health and so quickly. She didn’t just tell us what we were lacking but she was able to tell us how to fix the problem with just making some minor changes to our food and habits. I am grateful I got to have this experience and have told all my grandkids, great grandkids, and great great grandkids to have this done. I was so excited to come see Heather. I loved how she told us that deep in our hearts we probably already know what our bodies need or what we need to change. I also loved that she has such a holistic approach to helping people feel better. So much in this world is fixed with this pill or that. I loved that her recommendations were all things I could do with eating differently or changing my surroundings. I also loved that even though I had some food restrictions she said that doesn’t mean that you can never eat those foods again it just means to eat them more sparingly and to eat different foods more often. Since my meeting with her I seldom wake up with a gut ache (which I had been most days) and I am sleeping much better. I highly recommend seeing Heather. She is amazing!',
        imgUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/114757568_308759047201232_5932699593549822145_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=6aUeSHmPR98AX_ym-e-&_nc_ht=scontent-lax3-1.xx&oh=fb274c25f652426af0004b689cc37fba&oe=5F3B03D0',
        animationDir: 'right'
    },
];

const List = () => {

    return (
        <Grid container spacing={4}>
            {reviews.map(review => (
                <Grid item xs={12} key={review.id}>
                    <TestimonialListItem direction={review.animationDir} name={review.name} review={review.review} imgUrl={review.imgUrl} />
                </Grid>
            ))}
        </Grid>
    )
};

export default List;