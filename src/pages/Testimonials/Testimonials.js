import React, { useState, useEffect } from "react";
import "../Testimonials/Testimonials.css";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Zoom } from "react-slideshow-image";


let Testimonials = () => {
  
  return (
    <>
{/* <Carousel items={items} active={0}/> */}
<Slideshow />
<h4>Want your story to be featured?</h4>
<ShareButton />
    <h1>Hello World</h1>
    </>
  );
};

export default Testimonials;

const Slideshow = () => {
  const slides = [
    {
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione incidunt labore quod, alias odit similique quo expedita nihil magni quam eveniet magnam repellendus sequi officiis. Eum saepe aliquid ab?",
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione incidunt labore quod, alias odit similique quo expedita nihil magni quam eveniet magnam repellendus sequi officiis. Eum saepe aliquid ab?",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione incidunt labore quod, alias odit similique quo expedita nihil magni quam eveniet magnam repellendus sequi officiis. Eum saepe aliquid ab?",
        }
]
  
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
  let newWords = slides.map((each, index) => {return <WordsStuff key={index} each={each.content}/>} )
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {newWords}
        
      </Zoom>
    </div>
  )
}

let WordsStuff = props => {
  return (
    <p style={{width: "100%"}}>{props.each}</p>
  )
}

let ShareButton = props => {
  let handleClick = () => {
    return <ShareModal />
  }
  return (
    <>
    <button className="btn" id="share" type="button" data-toggle="modal" data-target="#ModalCenter" onClick={handleClick}>Share your story</button>
    <ShareModal />
    </>
  )
}

let ShareModal = props => {
  return (
<div className="modal fade" id="ModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ModalCenterTitle">Share Your Story with us!</h5>
        <form className="form"></form>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
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
//       <div className="arrow arrow-left" onClick={moveLeft}><i className="fas fa-arrow-circle-left"></i></div>
//       <CSSTransition transitionName={run.direction}>
//         {generateItems}
//       </CSSTransition>
//       <div className="arrow arrow-right" onClick={moveRight}><i className="fas fa-arrow-alt-circle-right"></i></div>
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