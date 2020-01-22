import React, { useState, useEffect } from "react";
import "../Button/Button.css";
import CardList2 from "../CardList2/CardList2"

let Button = props => {
  let [hide, setHide] = useState({ isHidden: true });
  let handleClick = () => {
    if (hide.isHidden === true) {
      console.log(`current state of hide is ${hide.isHidden}`);
      return setHide({ isHidden: false });
    }
    if (hide.isHidden === false) {
      console.log(`current state of hide is ${hide.isHidden}`);
      return setHide({ isHidden: true });
    }
  };
  let { isHidden } = hide;
  console.log(isHidden);
  return (
    <>
      {isHidden ? (
        <button
          className="btn"
          id="resourceBtn"
          onClick={handleClick}
          style={{ marginBottom: "1em" }}
        >
          {props.text}
        </button>
      ) : null}
      {isHidden === false ? (
        <div
          className="row justify-content-center"
          style={{ marginBottom: "1em", marginTop: "-4em" }}
          id="rowHidden"
        >
          <CardList2
            title={[
              "CALIFORNIA AND FLORIDA AVOCADOS DIFFERENCE",
              "BEST DETOX FRUIT WATERS",
              "IS IT BETTER TO GET VITAMINS FROM FOOD OR SUPPLEMENTS?",
              "HERE'S WHY WE USE WHEY PROTEIN ISOLATE!",
              "WHAT IS HOLISTIC MEDICINE?"
            ]}
            p1={[
              "Blend It Healthy uses California avocados which contain less calories.",
              "A delicious way to cleanse your system",
              "Are natural vitamins better than synthetic vitamins?",
              "It is a high-quality protein replete with all the essential amino acids.",
              "A person's mind and spirit are treated as important to health and body."
            ]}
            cardImg={[
              "avocado.jpg",
              "lemons.jpg",
              "pills.png",
              "vanilla.jpg",
              "Mindfulness.png"
            ]}
            // Place holder link for detox, and holsitic medicine
            links={[
              "https://www.quickanddirtytips.com/health-fitness/healthy-eating/what-s-the-difference-between-california-and-florida-avocados",
              "https://www.healthline.com/nutrition/detox-water-101",
              "https://www.health.harvard.edu/newsweek/Listing_of_vitamins.htm",
              "https://www.myhealthylivingcoach.com/what-is-whey-protein-isolate-and-how-can-it-help-you",
              "https://www.webmd.com/balance/guide/what-is-holistic-medicine"
            ]}
          />
        </div>
      ) : null}
    </>
  );
};

export default Button;
