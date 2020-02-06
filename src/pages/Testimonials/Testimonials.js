import React, { useState, useEffect } from "react";
import "../Testimonials/Testimonials.css";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Slide } from "react-slideshow-image";


let Testimonials = () => {

  return (
    <>
{/* <Carousel items={items} active={0}/> */}
<Slideshow />
    <h1>Hello World</h1>
    </>
  );
};

export default Testimonials;

const Slideshow = () => {
  const slides = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg']
  const slidess = [
    {
      city: 'Paris',
      country: 'France',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Singapore',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: 'Prague',
      country: 'Czech Republic',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      city: 'Moscow',
      country: 'Russia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
  return (
    <div className="slide-container">
       <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slides[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slides[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slides[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
    </div>
  )
}

// let Carousel = props => {
//   const [run, setRun] = useState({
//     items: props.items,
//     active: props.active,
//     direction: ""
//   })

// let moveLeft = () => {
//   let newActive = run.active;
//   newActive--;
//   setRun({...run, active: newActive < 0 ? run.items.length - 1 : newActive, direction: "left"})
// }

// let moveRight = () => {
//   let newActive = run.active
//   setRun({...run, active: (newActive + 1) % run.items.length, direction: "right"})
// }

// let generateItems = () => {
//   let items = [];
//   let level;
//   console.log(run.active);
//   for (let i = run.active - 2; i < run.active + 3; i++) {
//     let index = i
//     if (i < 0) {
//       index = i % run.items.length + i;
//     } else if (i >= run.items.length) {
//       index = i % run.items.length
//     }
//     level = run.active - i;
//     items.push(<Item key={index} id={run.items[i]} level={level} />)
//   }
//   return items;
// }

//   return (
//     <div id="carousel" className="noselect">
//       <div className="arrow arrow-left" onClick={moveLeft}><i class="fas fa-arrow-circle-left"></i></div>
//       <CSSTransition transitionName={run.direction}>
//         {generateItems}
//       </CSSTransition>
//       <div className="arrow arrow-right" onClick={moveRight}><i class="fas fa-arrow-alt-circle-right"></i></div>
//     </div>
//   )
// }

// let Item = (props) => {
//   const [curLVL, setCurLVL] = useState({level: props.level});
//   const className= `item level ${curLVL.level}`

//   return (
//     <div className={className}>
//       {props.id}
//     </div>
//   )
// }