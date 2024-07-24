import React from "react";

const LogoPhraseComponent = () => {
  return (
    <div id="logo-phrase-container">
      <div id="logo-phrase">
        <div>
          <svg
            className="logo"
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 456 396"
          >
            <path
              fillRule="evenodd"
              className="s0"
              d="m-0.5-0.5q67 0 134 0 80.5 140.1 161 280-33 58-66 116-1 0-2 0-63-111.3-128-221.5 27.3-2.5 55-1 1.5 3.3 4 5.5 34.2 61.4 70 122 1.3-1.5 2.5-3 4.7-9.1 10.5-17.5-67.6-117-135.5-233.5-39.9 0-80.5 0-11.7-22.5-25-44 0-1.5 0-3zm160 0q148 0 296 0 0 1.5 0 3-34.7 59-69 118.5-1 1-2 0-13.8-22.8-25-47 8-13.2 14-27.5-25.8 0.1-51 0-0.5 0.8-1 1.5 26.6 47.1 52 95-12.4 24.1-27.5 46.5-39.8-69.6-78-140-1.3-1.3-2.5-2.5-11.8-0.6-23-0.5-0.5 0.8-1 1.5 45.7 80.6 92.5 160.5 1 2 0 4-12.9 22.3-26.5 44-73.6-125.8-146.5-252-0.9-2.5-1.5-5z"
            />
          </svg>
        </div>
        <div id="phrase">
          <p>
            {`“Live.forEach((day) => {`}
            <p>{`learning += growth`}</p>
            <p>{`
        })”`}</p>
          </p>
        </div>
        <div id="presentation-movil">
          <p>
            Hi, Im <br />
            <span>Jose Mesa</span>
          </p>
          <p>
            Fullstack web <br />
            developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoPhraseComponent;
