import React from 'react';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import Banner from '../components/Banner/Banner';
import Process from '../components/Process/Process';
import Testimonial from '../components/Testimonial/Testimonial';

const index = () => {

    return(
        <Layout>
            <Home />
            <Banner />
            <Process />
            <Testimonial />
        </Layout>
    )
};

export default index;