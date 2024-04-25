"use client";
import { cinzel } from "@/app/fonts";
import React, { useEffect, useState } from "react";
import { BsStopwatchFill } from "react-icons/bs";
import { CiStopwatch } from "react-icons/ci";
interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const DateBannar = () => {
  let time: Time = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const [timeRemaining, setTimeRemaining] = useState(time);

  useEffect(() => {
    const weddingDate: Date = new Date("2024-09-06T23:59:59");
    const intervalId = setInterval(() => {
      const difference = +new Date(weddingDate) - +new Date();
      let timeRemaining: Time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeRemaining = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeRemaining(timeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <section
        className={`${cinzel.className} w-full h-40 hidden md:grid md:grid-cols-8`}
      >
        <div className="bg-light-secondary col-span-3 text-white flex justify-center items-center text-3xl">
          <div className="relative flex mr-7">
            <div className="origin-bottom -rotate-12 mr-0">
              <CiStopwatch size={80} />
            </div>
            <div className=" origin-bottom rotate-12 absolute right-0 bottom-1/4">
              <BsStopwatchFill />
            </div>
          </div>
          Countdown to
          <br /> Wedding
        </div>
        <div className="col-span-1 bg-light-primary shadow-2xl flex-col text-white text-4xl flex justify-center items-center ">
          <span className="text-4xl flex">{timeRemaining.days}</span>
          <span className="text-xl">Days</span>
        </div>
        <div className="col-span-1 bg-light-primary shadow-2xl text-white flex flex-col justify-center items-center">
          <span className="text-4xl flex">{timeRemaining.hours}</span>
          <span className="text-xl"> Hours</span>
        </div>
        <div className="col-span-1 bg-light-primary shadow-2xl text-white text-4xl flex flex-col justify-center items-center">
          <span className="text-4xl flex">{timeRemaining.minutes}</span>
          <span className="text-xl">Minutes</span>
        </div>
        <div className="col-span-1 bg-light-primary shadow-2xl text-white text-4xl flex justify-center items-center flex-col">
          <span className="text-4xl flex">{timeRemaining.seconds}</span>
          <span className="text-xl">Seconds</span>
        </div>
        <div className="col-span-1 bg-light-primary shadow-2xl text-white text-4xl flex justify-center items-center"></div>
      </section>
      <section
        className={`${cinzel.className} md:hidden flex flex-col justify-center items-center`}
      >
        <div className="bg-light-secondary col-span-3 text-white flex justify-center items-center text-xl w-full py-3">
          <div className="relative flex mr-7">
            <div className="origin-bottom -rotate-12 mr-0">
              <CiStopwatch size={50} />
            </div>
            <div className=" origin-bottom rotate-12 absolute right-0 bottom-1/4">
              <BsStopwatchFill />
            </div>
          </div>
          Countdown to
          <br /> Wedding
        </div>
        <div className="sm:flex w-full justify-evenly bg-light-primary ">
          <div className="col-span-1 bg-light-primary shadow-3xl flex-col h-20 text-white text-4xl flex justify-center items-center border-collapse">
            <span className="text-2xl flex">{timeRemaining.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="col-span-1 bg-light-primary shadow-3xl h-20 text-white flex flex-col justify-center items-center border-orange-600">
            <span className="text-2xl flex">{timeRemaining.hours}</span>
            <span className="text-sm"> Hours</span>
          </div>
          <div className="col-span-1 bg-light-primary shadow-3xl h-20 text-white text-4xl flex flex-col justify-center items-center">
            <span className="text-2xl flex">{timeRemaining.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="col-span-1 bg-light-primary shadow-3xl h-20 text-white text-4xl flex justify-center items-center flex-col">
            <span className="text-2xl flex">{timeRemaining.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default DateBannar;
