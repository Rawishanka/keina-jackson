'use client'
import React, { useEffect } from "react";
import Navbar from "./navbar";
import Slider from "./slider";
import DateBannar from "./date-banner";
import AboutCouple from "./about-couplt";
import ReservationForm from "./reservation-form";
import Ceremony from "./ceremony";
import ContactsUs from "./contact-us";
import Info from "./info";
import View from "./view";
import { cinzel, greatVibes } from "@/app/fonts";
const HomePage = () => {

  useEffect(() => {
    const audio = new Audio('/invite.mp3');
    audio.loop = true; // Loop the audio
    audio.play(); // Start playing the audio
    return () => {
      audio.pause(); // Pause the audio when component unmounts
    };
  }, []);

  return (
    <div>
      <audio autoPlay loop>
        <source src="/invite.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="relative">
        <div className="absolute top-3 left-0 z-10 w-full">
          <Navbar />
        </div>
        <Slider />
      </div>
      <div>
        <DateBannar />
      </div>
      <div>
        <Ceremony />
      </div>
      <div className="h-40 bg-light-secondary flex flex-col text-center justify-center items-center ">
        <h1 className={`${cinzel.className} md:text-4xl text-white`}>
          The best gift is your patecipation, thanks to all
        </h1>
        <h2 className={`${greatVibes.className} text-white md:text-2xl pt-2`}>
          Christin & Thomas
        </h2>
      </div>
      <div>
        <Info />
      </div>
      <div className="h-20 bg-white flex flex-col text-center justify-center items-center "></div>
      <div>
        <View />
      </div>
      <div className="h-20 bg-white flex flex-col text-center justify-center items-center "></div>
      <div>
        <ReservationForm />
      </div>
      <div>
        <ContactsUs />
      </div>
      
    </div>
  );
};

export default HomePage;
