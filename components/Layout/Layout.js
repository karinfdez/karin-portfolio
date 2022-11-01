import React from "react";
import SideNav from "../SideNav";
import Navbar from "../Navbar";
import { PropTypes } from "prop-types";

const Layout = (props) => {
    const {
        navbarWidth,
        navbarHeigth,
        children,
        namePage = "",
        varProps,
    } = props;

    return (
        <div>
            <div className="flex w-full justify-center align-center">
                <Navbar varProps={varProps} />
            </div>
            <div className="flex">
                <div className="flex bg-transparent relative pt-64">
                    <SideNav
                        navbarWidth={navbarWidth}
                        navbarHeight={navbarHeigth}
                        namePage={namePage}
                    />
                </div>
                <div className="flex mx-auto">{children}</div>
            </div>
        </div>
    );
};

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Layout.defaultProps = {
    title: "Karin's Portfolio",
    description: "Karin's Portfolio Homepage",
    children: null,
};

export default Layout;
