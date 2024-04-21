"use client"
import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Importing CSS for default styles
import { cinzel, greatVibes } from "@/app/fonts";

const Quots = () => {
  // Customizing the duration between each slide transition (in milliseconds)
  const slideDuration = 2000; // 5 seconds

  return (
    <Slide
      arrows={false} // Disabling default arrows
      indicators={false} // Disabling default indicators (circles)
      duration={slideDuration} // Customizing slide transition duration
    >
      <div className="each-slide">
        <div className="h-40 bg-light-secondary flex flex-col text-center justify-center items-center ">
          <h1 className={`${cinzel.className} md:text-2xl text-md text-white`}>
           Welcome, family and friends! We&aposre thrilled to commemorate this next phase in our lives with you.
          </h1>
          <h2 className={`${greatVibes.className} text-white md:text-2xl pt-2`}>
          Samuel & Vidya
          </h2>
        </div>
      </div>
      <div className="each-slide">
        <div className="h-40 bg-light-secondary flex flex-col text-center justify-center items-center ">
          <h1 className={`${cinzel.className} md:text-2xl text-md text-white`}>
          We said yes! Join us in the countdown until we say &quotI do.&quot
          </h1>
          <h2 className={`${greatVibes.className} text-white md:text-2xl pt-2`}>
          Samuel & Vidya
          </h2>
        </div>
      </div>
      <div className="each-slide">
        <div className="h-40 bg-light-secondary flex flex-col text-center justify-center items-center ">
          <h1 className={`${cinzel.className} md:text-2xl text-md text-white`}>
          Lifes not about the destination, its about the journey
          </h1>
          <h2 className={`${greatVibes.className} text-white md:text-2xl pt-2`}>
          Samuel & Vidya
          </h2>
        </div>
      </div>
    </Slide>
  );
};

export default Quots;
