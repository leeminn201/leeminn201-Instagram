import React, { useState } from "react";

import "./Slider.scss";
import { mapOrder } from "components/utilities/sorts";
import BtnSlide from "./BtnSlider";
function Slider(props) {
  const { post } = props;
  const picture = mapOrder(post.picture, post.picOrder, "id");
  const [slideIndex, setSlideIndex] = useState(1);
  const piclen = picture.length;
  //Next slide function.
  const nextSlide = () => {
    //Set index to next picture.
    if (slideIndex !== piclen) {
      setSlideIndex(slideIndex + 1);
    }
    //If index is at the end, set it back to begin(1).
    else if (slideIndex === piclen) {
      setSlideIndex(1);
    }
  };
  //Previous slide function.
  const prevSlide = () => {
    //Set index previous picture.
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }
    //If index is at the begin, index previous to the end.
    else if (slideIndex === 1) {
      setSlideIndex(piclen);
    }
  };
  //move Dot function: set moveDot at slide index
  const moveDot = (index) => {
    setSlideIndex(index)
  };

  return (
    <div className="container-slide">
      {picture.map((picture, index) => {
        return (
          <div
            key={picture.id}
            //Check if it's next slide, display it.
            className={slideIndex === index + 1 ? "displaySlide" : "hideSlide"}
          >
            <img src={picture.picSrc} alt=""></img>
          </div>
        );
      })}
      <BtnSlide direction={"next"} action={nextSlide} />
      <BtnSlide direction={"prev"} action={prevSlide} />

      <div className="dots">
        {Array.from({length: piclen}).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
