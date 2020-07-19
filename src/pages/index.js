import React from 'react';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Process from '../components/Process/Process';
import Testimonial from '../components/Testimonial/Testimonial';
import Gallery from '../components/Gallery/Gallery';

const index = () => {

    return(
        <Layout>
            <Home />
            <HomeBanner />
            <Process />
            <Testimonial />
            <Gallery />
        </Layout>
    )
};

export default index;