import React from "react";
import "../Slideshow/Slideshow.css";
import { Zoom } from "react-slideshow-image";
import WordsStuff from "../../components/WordsStuff/WordsStuff";
import slides from "../../assets/slides.json"

const Slideshow = () => {

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };
  let newWords = slides.map((each, index) => {
    return <WordsStuff key={index} each={each.content} />;
  });
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>{newWords}</Zoom>
    </div>
  );
};

export default Slideshow;
