import React from "react";
import "../AboutUs/AboutUs.css"
import Banner2 from "../../components/AboutBanner2/Banner2"
import AboutText from "../../components/AboutText/AboutText"
import TestButton from "../../components/TestButton/TestButton"
import Banner3 from "../../components/AboutBanner3/Banner3"
import AboutBotText from "../../components/AboutBotText/AboutBotText"






let AboutUs = () => {
    return (
        <>
            <Banner2 />
            <AboutText />
            {/* <TestButton /> */}
            <Banner3 />
            <AboutBotText />
        </>
    )
};

export default AboutUs;