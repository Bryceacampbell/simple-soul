import React from 'react';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import Team from '../components/Team/Team';
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Process from '../components/Process/Process';
import ProcessBanner from '../components/ProcessBanner/ProcessBanner'
import Testimonial from '../components/Testimonial/Testimonial';
import Gallery from '../components/Gallery/Gallery';
import GalleryBanner from '../components/GalleryBanner/GalleryBanner'
import Contact from '../components/Contact/Contact'
const index = () => {

    return(
        <Layout>
            <Home />
            <Team/>
            <HomeBanner />
            <Process />
            <ProcessBanner />
            <Testimonial />
            <Gallery />
            <GalleryBanner />
            <Contact />
        </Layout>
    )
};

export default index;