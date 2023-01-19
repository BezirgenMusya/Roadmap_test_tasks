import React, { useState } from "react";
import "./index.css"

const Dots = ({ activeOne, questionsSwicher, questionName }) => {
  
  const swichOnDots = ()=>{
    questionsSwicher(questionName)
  }

  return (
    <div className={"dotsContainer"} onClick={swichOnDots}>
      <div className={`dots ${activeOne ? "active" : null}`}/>
    </div>
  );
}

export default Dots;