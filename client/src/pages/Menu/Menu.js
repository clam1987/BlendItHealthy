import React, { useState, useEffect } from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import BannerReusable from "../../components/BannerReusable/BannerReuseable"
import "../Menu/Menu.css";

let Menu = () => {
    let button = document.getElementsByClassName("menuBtn")
    
    let [clicked, setClicked] = useState({
        isClicked: false,
    })
    let [data, setData] = useState({
        dataColor: "red",
        backgroundColor: "#9AB49D"
    })

    let handleChange = () => {
        setClicked({isClicked: true});
    } 
    
    let handleClick = () => {
        console.log("click me")
        handleChange()
        switch (clicked.isClicked === true) {
            case data.dataColor:
                console.log("hello world");
                default:
                    console.log("click us"); 
                }
            }
            // console.log(clicked.isClicked);
            // console.log(data.dataColor)
            return (
                <>
        <BannerReusable text="Our Menu"/>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
            <button className="btn menuBtn" onClick={handleClick} data="red" style={{fontSize: 24, backgroundColor:"#E55538"}}>ALL FRUITS, FRUITS & VEGGIES, MEAL REPLACER</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" style={{fontSize:26, backgroundColor:"#11AC4C"}}>CLEANSING DETOX, NATURAL REMEDIES</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" style={{fontSize:24, backgroundColor:"#0093D0"}}>WORKOUT SMOOTHIES, COFFEE SMOOTHIES, HEALTHY SNACKS</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" style={{fontSize:26, backgroundColor:"#D0336A"}}>ORGANIC TEA, ORGANIC MATCHA</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" style={{fontSize:32, backgroundColor:"#FEB600"}}>BUILD YOUR OWN</button>
            </div>
            <div className="col-sm-1"></div>
        </div>
        </>
    )
}

export default Menu;