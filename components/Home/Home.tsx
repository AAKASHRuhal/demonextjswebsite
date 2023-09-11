"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Textchange from "./Textchange";
import CustomButton from "../CustomButton";
import ServiceSection from "./ServiceSection";
import Section2 from "./Section2";
import Section3 from "./Section3";

const HomePage = () => {
  return (
    <>
      <section className="wrapper overflow-hidden section-wrapper">
        <div className="container pt-19 pt-md-21 text-center position-relative">
          <div
            className="position-absolute"
            style={{
              top: "-15%",
              left: "50%",
              transform: "translateX(-50%)",
              animationName: "fadeIn",
              animationDuration: "700ms",
              animationTimingFunction: "ease",
              animationDelay: "0ms",
              animationDirection: "normal",
              animationFillMode: "both",
            }}
            data-cue="fadeIn"
            data-show="true"
          >
            <Image
              src="/images/blurry.png"
              alt="raksha bandhan"
              width={1400}
              height={1080}
            ></Image>
          </div>
          <div className="row position-relative">
            <div className="col-lg-8 col-xxl-7 mx-auto position-relative">
              <div
                className="position-absolute shape grape w-5 d-none d-lg-block"
                style={{
                  top: "-5%",
                  left: "-15%",
                  animationName: "fadeIn",
                  animationDuration: "700ms",
                  animationTimingFunction: "ease",
                  animationDelay: "1500ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
                data-cue="fadeIn"
                data-delay="1500"
                data-show="true"
              >
                {/* SVG code for grape shape */}
              </div>
              <div
                className="position-absolute shape violet w-10 d-none d-lg-block"
                style={{
                  bottom: "30%",
                  left: "-20%",
                  animationName: "fadeIn",
                  animationDuration: "700ms",
                  animationTimingFunction: "ease",
                  animationDelay: "1500ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
                data-cue="fadeIn"
                data-delay="1500"
                data-show="true"
              >
                {/* SVG code for violet shape */}
              </div>
              <div
                className="position-absolute shape fuchsia w-6 d-none d-lg-block"
                style={{
                  top: "0%",
                  right: "-25%",
                  transform: "rotate(70deg)",
                  animationName: "fadeIn",
                  animationDuration: "700ms",
                  animationTimingFunction: "ease",
                  animationDelay: "1500ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
                data-cue="fadeIn"
                data-delay="1500"
                data-show="true"
              >
                {/* SVG code for fuchsia shape */}
              </div>
              <div
                className="position-absolute shape yellow w-6 d-none d-lg-block"
                style={{
                  bottom: "25%",
                  right: "-17%",
                  animationName: "fadeIn",
                  animationDuration: "700ms",
                  animationTimingFunction: "ease",
                  animationDelay: "1500ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
                data-cue="fadeIn"
                data-delay="1500"
                data-show="true"
              >
                {/* SVG code for yellow shape */}
              </div>
              <div
                data-cues="slideInDown"
                data-group="page-title"
                data-disabled="true"
              >
                <Textchange />
              </div>
              <div
                className="d-flex justify-content-center"
                data-cues="slideInDown"
                data-delay="600"
                data-disabled="true"
              >
                <CustomButton
                  text={"See Projects"}
                  backgroundClass={"btn-primary"}
                />
                <CustomButton
                  text={"Countact Us"}
                  backgroundClass={"btn-fuchsia"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Section Start */}
        <ServiceSection />
        {/* Service Section End */}
      </section>

      {/* Second Section Start */}
      <Section2/>
      {/* Second Section End */}

      {/* Second Section Start */}
      <Section3/>
      {/* Second Section End */}
    </>
  );
};

export default HomePage;
