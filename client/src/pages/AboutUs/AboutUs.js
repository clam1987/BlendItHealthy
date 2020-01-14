import React from "react";
import "../AboutUs/AboutUs.css"
// Temp banner image
import pic from "../../assets/images/OurProgram.png"




let AboutUs = () => {
    return (
        <>
        <div className="row">
            <div className="col-sm" id="banner2">
                <p className="aboutUs">About Us</p>
            </div>
        </div>
            <div className="row">
                <div className="col-sm-8" id="textContainer">
                <p className="aboutUsText">On a quest to find source of nutrient-rich foods, we discovered that establishments claiming to be health-conscious were not providing 100% truly natural products that we seeked.</p>
                <p className="aboutUsText">Blend It Healthy was created as a response to this discovery in order to provide access to true nourishment. We are an honest business that keeps the well-being of our customers in mind when serving our nutritious freshly made drinks, free from artificial additivies and full of integrity.</p>
                <p className="aboutUsText" id="bottomMargin">Together with our customers, we create a community in which we strive for wellness, consolidate knowledge, and celebrate life through wholesome nutrition.</p>
                </div>
            </div>
            <div className="row">
                <button className="button badge-pill" id="testBtn">CLICK HERE TO SEE TESTIMONIALS FROM OUR HEALTH ENTHUSIAST GUESTS</button>
            </div>
            <div className="row">
            <div className="col-sm" id="banner3">
                <p className="aboutUs" id="botBanner">Our Story</p>
            </div>
            </div>
            <div className="row">
                <div className="col-sm" id="botImgDiv">
                    <img src={pic} alt="" id="botImg" />
                </div>
            </div>
        </>
    )
};

export default AboutUs;