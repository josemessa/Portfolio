import React from "react";

const AboutMePageComponent = () => {
  return (
    <div id="about-me-container">
      <div id="about-me">
      <div id="foto-grid-container">
        <div id="passions-container">
          <div id="games"></div>
          <div id="crime"></div>
          <div id="internet"> </div>
        </div>
      </div>

      
        <div id="description-container">
          <div id="description">
            <h3>ABOUT ME</h3>
            <p>
              {" "}
              <span>{`< p >`}</span>Malaga native, resident in Mijas-costa,
              video games and crime novels are two of my great passions
              <br />
              <br />
              Extroverted and lively, but with seriousness and responsibility
              {`< br />`} <br />
              <br />
              Ex-chef and merchant, my true passion has always been the internet
              and computing.This interest led me to delve into web development,
              a field in which I can combine creativity and logic to create
              useful tools.{`< br />`}
              <br />
              <br />
              My work experience together with my technical skills, I They allow
              not only to understand the needs and expectations of the users,
              but also design and develop solutions that really make a
              difference. <span>{`< /p >`} </span>
            </p>
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default AboutMePageComponent;
