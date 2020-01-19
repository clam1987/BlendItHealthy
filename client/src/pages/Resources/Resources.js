import React, {useState, useEffect } from "react";
import "../Resources/Resources.css"
import BannerReusable from "../../components/BannerReusable/BannerReuseable"
import CardList from "../../components/CardList/CardList";

let Resources = () => {
    return (
        <>
        <BannerReusable style={{backgroundColor: "#37CDB8"}} text={"Our Resources"}/>
        <CardList />
        <h1>This is Resources</h1>
        </>
    )
}

export default Resources;