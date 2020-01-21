import React, { useState, useEffect } from "react";
import "../CardList2/CardList2.css"
import Card from "../Card/Card";


let CardList2 = (props) => {
    return (
        <div className="row" id="cardRow">
            <ul className="list-inline mx-auto justify-content-center">
                <Card title={props.title[0]} p1={props.p1[0]} cardImg={props.cardImg[0]}/>
                <Card title={props.title[1]} p1={props.p1[1]} cardImg={props.cardImg[1]}/>
                <Card title={props.title[2]} p1={props.p1[2]} cardImg={props.cardImg[2]}/>
                <Card title={props.title[3]} p1={props.p1[3]} cardImg={props.cardImg[3]}/>
                <Card title={props.title[4]} p1={props.p1[4]} cardImg={props.cardImg[4]}/>
            </ul>
        </div>
    )
}

export default CardList2;