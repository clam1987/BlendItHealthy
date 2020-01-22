import React, { useState, useEffect } from "react";
import "../CardList/CardList.css"
import Card from "../Card/Card";


let CardList = props => {
    console.log(props.link)
    return (
        <div className="row" id="cardRow">
            <ul className="list-inline mx-auto justify-content-center">
                <Card title={props.title[0]} p1={props.p1[0]} cardImg={props.cardImg[0]} links={props.links[0]}/>
                <Card title={props.title[1]} p1={props.p1[1]} cardImg={props.cardImg[1]} links={props.links[1]}/>
                <Card title={props.title[2]} p1={props.p1[2]} cardImg={props.cardImg[2]} links={props.links[2]}/>
            </ul>
        </div>
    )
}

export default CardList;