import React from 'react';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import Banner from '../components/Banner/Banner';

const index = () => {

    return(
        <Layout>
            <Home />
            <Banner />

        </Layout>
    )
};

export default index;