import React from "react";

import htmlUrl from "/src/assets/Imagenes/html.webp";
import cssUrl from "/src/assets/Imagenes/css.webp";
import javascriptUrl from "/src/assets/Imagenes/javascript.webp";
import mongoUrl from "/src/assets/Imagenes/mongo.webp";
import reactUrl from "/src/assets/Imagenes/react.webp";
import mysqlUrl from "/src/assets/Imagenes/mysql.webp";

import Marquee from "react-fast-marquee";

const SkillsPageComponent = () => {
  return (
    <div id="skills-container">
      <div id="skills-description">
        <div>
          <h3>SKILLS</h3>
          <div id="foto-skills-container-mobile"></div>
          <p>
            {" "}
            <span>{`< p >`}</span>I have experience in HTML, CSS, JavaScript,
            MySQL, MongoDB and React, and am passionate about creating dynamic
            and efficient web applications<span>{`< br/ >`}</span>
            <br />
            <br />
            In addition to my technical skills, I excel in problem solving,
            teamwork, and effective communication.<span>{`< br/ >`}</span>
            <br />
            <br />
            My goal is to design and develop solutions that not only meet
            expectations but also deliver an exceptional user experience.{" "}
            <span>{`< br/ >`}</span>
            <br />
            <br />I am excited to contribute my technical and social skills to
            innovative and challenging projects to continue learning and
            growing, which is my main goal.
            <span>{`< /p >`}</span>
          </p>
        </div>
        <div id="lenguajes">
          <Marquee autoFill={true}>
            <img src={htmlUrl} alt="HTML" />
            <img src={cssUrl} alt="CSS" />
            <img src={javascriptUrl} alt="JavaScript" />
            <img src={mongoUrl} alt="MongoDB" />
            <img src={mysqlUrl} alt="MySQL" />
            <img src={reactUrl} alt="React" />
          </Marquee>
        </div>
      </div>
      <div id="foto-skills-container"></div>
    </div>
  );
};

export default SkillsPageComponent;
