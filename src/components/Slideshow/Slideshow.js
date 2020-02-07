import React from "react";
import "../Slideshow/Slideshow.css";
import { Zoom } from "react-slideshow-image";
import WordsStuff from "../../components/WordsStuff/WordsStuff";

const Slideshow = () => {
  const slides = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione incidunt labore quod, alias odit similique quo expedita nihil magni quam eveniet magnam repellendus sequi officiis. Eum saepe aliquid ab?"
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione incidunt labore quod, alias odit similique quo expedita nihil magni quam eveniet magnam repellendus sequi officiis. Eum saepe aliquid ab?"
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione incidunt labore quod, alias odit similique quo expedita nihil magni quam eveniet magnam repellendus sequi officiis. Eum saepe aliquid ab?"
    }
  ];

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
