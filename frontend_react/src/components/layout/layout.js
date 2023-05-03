import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import ArrowButton from "../arrow-button";


const Layout = () => {

    return (
        <Fragment>
            <Header />
            <main className="App">
                <Outlet />
            </main>
            <Footer />
            <ArrowButton />
        </Fragment>
    )
}

export default Layout;