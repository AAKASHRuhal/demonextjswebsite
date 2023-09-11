import React, { useEffect, useState } from "react";

const Textchange = () => {
  const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(texts[currentIndex]);

  useEffect(() => {
    const changeIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const intervalId = setInterval(() => {
      changeIndex();
      setText(texts[currentIndex]); // Update text here
    }, 3000); // Change text every 2 seconds

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, texts]);

  return (
    <>
      <h1
        className="display-1 fs-64 mb-5 mx-md-10 mx-lg-0"
        data-cue="slideInDown"
        data-group="page-title"
        data-show="true"
        style={{
          animationName: "slideInDown",
          animationDuration: "700ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both",
        }}
      >
        We are a digital web agency specializing on <br />
        <RotatingText text={text} />
      </h1>
      <p
        className="lead fs-24 mb-8"
        data-cue="slideInDown"
        data-group="page-title"
        data-show="true"
        style={{
          animationName: "slideInDown",
          animationDuration: "700ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both",
        }}
      >
        We are an award-winning digital web agency that strongly believes in the
        power of creative ideas.
      </p>
    </>
  );
};

const RotatingText = ({ text }:any) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, [text]);

  return (
    <span className="rotator-fade text-primary">
      <span
        className={` ${
          animate ? "animate__animated animate__fadeInDown" : ""
        }`}
        style={{ display: "inline-block" }}
      >
        {text}
      </span>
    </span>
  );
};

export default Textchange;
