import React from "react";

const CustomButton = ({ text, backgroundClass }: any) => {
  const buttonClasses = `btn btn-lg rounded-xl mx-1 ${backgroundClass}`;
  const buttonStyle = {
    animationName: "slideInDown",
    animationDuration: "700ms",
    animationTimingFunction: "ease",
    animationDelay: "600ms",
    animationDirection: "normal",
    animationFillMode: "both",
  };

  return (
    <span data-cue="slideInDown" data-delay="600" data-show="true" style={buttonStyle}>
      <a className={buttonClasses} >
        {text}
      </a>
    </span>
  );
};

export default CustomButton;
