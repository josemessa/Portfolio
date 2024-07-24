import React from "react";
import LogoPhraseComponent from "../LogoPhrase/LogoPhraseComponent";

const IndexComponent = () => {
  return (
    <div id="index-container">
      <div id="presentation-container">
        <div id="presentation">
          <p>
            Hi, Im <span> Jose Mesa</span>
          </p>
          <p>Fullstack web developer.</p>
        </div>

        <LogoPhraseComponent />
      </div>
      <div id="foto-container"></div>
      <svg id="scroll-icon"xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 125"  ><path d="M38.2,17c-11.6,0-21,9.4-21,21v24c0,11.6,9.4,21,21,21s21-9.4,21-21V38C59.2,26.4,49.8,17,38.2,17z M54.2,62  c0,8.8-7.2,16-16,16s-16-7.2-16-16V38c0-8.8,7.2-16,16-16s16,7.2,16,16V62z"/><path d="M38.2,30.4c-1.4,0-2.5,1.1-2.5,2.5v7.3c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5v-7.3C40.7,31.6,39.6,30.4,38.2,30.4z"/><path d="M81.2,61.9l-3.4,3.4V31c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v34.4l-3.4-3.4c-0.6-0.6-1.5-0.6-2.1,0s-0.6,1.5,0,2.1l6,6  c0.1,0.1,0.3,0.3,0.5,0.3c0,0,0,0,0,0c0.2,0.1,0.4,0.1,0.5,0.1s0.4,0,0.5-0.1c0,0,0,0,0,0c0.2-0.1,0.3-0.2,0.5-0.3l6-6  c0.6-0.6,0.6-1.5,0-2.1S81.8,61.4,81.2,61.9z"/>Scroll</svg>
   
    </div>
  );
};

export default IndexComponent;
