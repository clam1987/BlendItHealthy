import React, { useState } from "react";
import "../Testimonials/Testimonials.css";
import { CSSTransition } from "react-transition-group"

let Testimonials = () => {
  const [inProp, setInProp] = useState(false);
  return (
    <>
      <Carousel />
      <h1>Hello World</h1>
    </>
  );
};

export default Testimonials;

let Carousel = props => {
  const [run, setRun] = useState({
    items: props.items,
    active: props.active,
    direction: ""
  })

let moveLeft = () => {
  let newActive = run.active;
  newActive--;
  setRun({...run, active: newActive < 0 ? run.items.length - 1 : newActive, direction: "left"})
}

let moveRight = () => {
  let newActive = run.active
  setRun({...run, active: (newActive + 1) % run.items.length, direction: "right"})
}

let generateItems = () => {
  let items = [];
  let level;
  console.log(run.active);
  for (let i = run.active - 2; i < run.active + 3; i++) {
    let index = i
    if (i < 0) {
      index = i % run.items.length + i;
    } else if (i >= run.items.length) {
      index = i % run.items.length
    }
    level = run.active - i;
    items.push(<Item key={index} id={run.items[i]} level={level} />)
  }
  return items
}

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}><i className="fi-arrow-left"></i></div>
      <CSSTransition transitionName={run.direction}>
        {generateItems()}
      </CSSTransition>
      <div className="arrow arrow-right" onClick={moveRight}><i className="fi-arrow-right"></i></div>
    </div>
  )
}

let Item = (props) => {
  const [curLVL, setCurLVL] = useState({level: props.level});
  const className= `item level ${curLVL.level}`

  return (
    <div className={className}>
      {props.id}
    </div>
  )
}