import React from "react"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Hero from './components/Hero';
import "./layout.css";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <Hero />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
};

export default Layout
