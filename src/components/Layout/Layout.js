import React from "react"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "./layout.css";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat', 'sans-serif'
        ].join(','),
    },
});

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Hero />

            {children}

            <Footer />
        </ThemeProvider>
    )
};

export default Layout
