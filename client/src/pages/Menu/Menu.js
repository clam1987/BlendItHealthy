import React, { useState, useEffect } from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import BannerReusable from "../../components/BannerReusable/BannerReuseable"
import "../Menu/Menu.css";
import redMenu from "../../assets/images/red_menu.png"

let Menu = () => {
    let initialRedState = {
        dataColor: "",
        isClicked: false,
        pageStyle: {
          backgroundColor:"#9AB49D",
          fontSize: 24
        }
 };

    let initialGreenState = {
        dataColor: "",
        isClicked: false,
        pageStyle: {
          backgroundColor:"#9AB49D",
          fontSize: 26
        }
 };

    let initialBlueState = {
        dataColor: "",
        isClicked: false,
        pageStyle: {
          backgroundColor:"#9AB49D",
          fontSize: 20
        }
 };

    let initialPurpleState = {
        dataColor: "",
        isClicked: false,
        pageStyle: {
          backgroundColor:"#9AB49D",
          fontSize: 26
        }
 };
    let initialYellowState = {
        dataColor: "",
        isClicked: false,
        pageStyle: {
          backgroundColor:"#9AB49D",
          fontSize: 32
        }
 };
    let [clickedRed, setClickedRed] = useState({
           dataColor: "",
           isClicked: false,
           pageStyle: {
             backgroundColor:"#9AB49D",
             fontSize: 24
           }
    });

    let [clickedGreen, setClickedGreen] = useState({
        dataColor: "",
        isClicked: false,
        pageStyle: {
          backgroundColor:"#9AB49D",
          fontSize: 26
        }
 });

    let [clickedBlue, setClickedBlue] = useState({
        dataColor: "",
        isClicked: false,
        pageStyle: {
          backgroundColor:"#9AB49D",
          fontSize: 20
        }
 });
 let [clickedPurple, setClickedPurple] = useState({
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor:"#9AB49D",
      fontSize: 26
    }
});
let [clickedYellow, setClickedYellow] = useState({
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor:"#9AB49D",
      fontSize: 32
    }
});

    let handleClick = (e) => {
        console.log("click me")
        let val = e.target.dataset.color


        // console.log(clicked)
        switch (val) {
            case "red":
                setClickedGreen(initialGreenState);
                setClickedBlue(initialBlueState);
                setClickedPurple(initialPurpleState);
                setClickedYellow(initialYellowState);
                return setClickedRed({ dataColor: val, isClicked: true, pageStyle: { backgroundColor:"#E55538", fontSize:24 } });
            case "green":
                setClickedRed(initialRedState);
                setClickedBlue(initialBlueState);
                setClickedPurple(initialPurpleState);
                setClickedYellow(initialYellowState);
                return setClickedGreen({ dataColor: val, isClicked: true, pageStyle: { backgroundColor:"#11AC4C", fontSize:26 } });
            case "blue":
                setClickedRed(initialRedState);
                setClickedGreen(initialGreenState);
                setClickedPurple(initialPurpleState);
                setClickedYellow(initialYellowState);
                return setClickedBlue({ dataColor: val, isClicked: true, pageStyle: { backgroundColor:"#0093D0", fontSize:20 } })
            case "purple":
                setClickedRed(initialRedState);
                setClickedGreen(initialGreenState);
                setClickedBlue(initialBlueState);
                setClickedYellow(initialYellowState);
                return setClickedPurple({ dataColor: val, isClicked: true, pageStyle: { backgroundColor:"#D0336A", fontSize:26 } })
            case "yellow":
                setClickedRed(initialRedState);
                setClickedGreen(initialGreenState);
                setClickedBlue(initialBlueState);
                setClickedPurple(initialPurpleState);
                return setClickedYellow({ dataColor: val, isClicked: true, pageStyle: { backgroundColor:"#FEB600", fontSize:32 } })
            default:
                return
        }
    };
    // console.log(clicked);
            return (
                <>
        <BannerReusable text="Our Menu"/>
        <div className="row" id="rowMenuBtn">
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
            <button className="btn menuBtn" data-color="red" onClick={handleClick} style={clickedRed.pageStyle}>ALL FRUITS, FRUITS & VEGGIES, MEAL REPLACER</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" data-color="green" onClick={handleClick} style={clickedGreen.pageStyle}>CLEANSING DETOX, NATURAL REMEDIES</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" data-color="blue" onClick={handleClick} style={clickedBlue.pageStyle}>WORKOUT SMOOTHIES, COFFEE SMOOTHIES, HEALTHY SNACKS</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" data-color="purple" onClick={handleClick} style={clickedPurple.pageStyle}>ORGANIC TEA, ORGANIC MATCHA</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" data-color="yellow" onClick={handleClick} style={clickedYellow.pageStyle}>BUILD YOUR OWN</button>
            </div>
            <div className="col-sm-1"></div>
        </div>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                {/* pseudo code:
                render image based on data-color and clicked state
                create a handleChange function that
                make a json file of images
                1. changes images based on the data-color
                2. must check to see if isClicked = true
                    2a. call current color state i.e. redstate and run a check to see if isClicked = true
                    2b if is true, render image in img src */}
                <img src="placeholder" alt="placeholder" />
            </div>
            <div className="col-sm-1"></div>
        </div>
        </>
    )
}

export default Menu;

// fontSize: 24,