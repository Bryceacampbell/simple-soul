import React from 'react';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Process from '../components/Process/Process';
import Testimonial from '../components/Testimonial/Testimonial';

const index = () => {

    return(
        <Layout>
            <Home />
            <HomeBanner />
            <Process />
            <Testimonial />
        </Layout>
    )
};

export default index;