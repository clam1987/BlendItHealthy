import React from "react";
import "../CardList/CardList"
import Card from "../Card/Card";

let CardList = () => {
    return (
        <div className="row">
            <ul className="list-inline mx-auto justify-content-center">
                <Card />
                <Card />
            </ul>
        </div>
    )
}

export default CardList;