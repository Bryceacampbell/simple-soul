import React from "react"

import Header from './components/Header';
import Hero from './components/Hero';
import "./layout.css";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <Hero />
            <Container>
                {children}
            </Container>
        </>
    )
};

export default Layout
