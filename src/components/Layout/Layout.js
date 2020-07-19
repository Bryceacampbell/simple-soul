import React from "react"

import Header from './components/Header';
import "./layout.css";

const Layout = ({ children }) => {
    return (
        <>
        <Header />

            <div>
                {children}
            </div>
        </>
    )
};

export default Layout
