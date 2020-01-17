import React from "react";
import "../BannerText/BannerText.css"

let BannerText = (props) => {
    return (
        <div className="col-sm">
            <p className="bannerTextReUse" style={props.style}>{props.text}</p>
        </div>
    )
}

export default BannerText;