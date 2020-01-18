import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import BannerReusable from "../../components/BannerReusable/BannerReuseable"
import "../Menu/Menu.css";

let Menu = () => {
    let button = document.getElementsByClassName("menuBtn")
    // console.log(button)
    let [clicked, setClicked] = useState([
       {
           dataColor: "",
           isClicked: false
       }
    ])
    
    let handleChange = (e) => {
        // console.log(e.target.dataset.color);
        // console.log(e);
    }
    
    let handleClick = (e) => {
        console.log("click me")
        let val = e.target.dataset.color
        // console.log(val)
        let style;


        // console.log(clicked)
        switch (val) {
            case "red":
                return setClicked({ dataColor: val, isClicked: true });
                // console.log("hello");
                break;
            case "green":
                setClicked({ dataColor: val, isClicked: true });
                console.log("world");
                break;
            default:
                console.log("disgunasuk");
                break;
        }

            // switch (clicked.isClicked === true) {
            //     case "red":
            //         console.log("hello");
            //         break;
            //     case clicked[1]:
            //         console.log("world");
            //     case "blue":
            //         console.log("1234");
            //     case "purple":
            //         console.log("5678");
            //     case "yellow":
            //         console.log("1987");
            //     default:
            //         console.log("In It to win it")
            // }

     
            


    }
    // console.log(clicked);
            return (
                <>
        <BannerReusable text="Our Menu"/>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
            <button className="btn menuBtn" data-color="red" onClick={handleClick} style={clicked.isClicked ? { backgroundColor:"#E55538", fontSize:24 } : { backgroundColor:"#9AB49D", fontSize:24 } }>ALL FRUITS, FRUITS & VEGGIES, MEAL REPLACER</button>
            </div>
            <div className="col-sm-2">
            <button className="btn menuBtn" data-color="green" onClick={handleClick} style={clicked.isClicked ? { fontSize:26, backgroundColor:"#11AC4C" } : { fontSize:26, backgroundColor:"#9AB49D" } }>CLEANSING DETOX, NATURAL REMEDIES</button>
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

// fontSize: 24,