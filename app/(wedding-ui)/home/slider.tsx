"use client";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import clsx from "clsx";
import { cinzelDecorative, greatVibes } from "@/app/fonts";
import Link from "next/link";

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const date = "07/09/2024";
  const name = "Samuel & Vidya";

  const slides = [
    { id: 1, url: "/photo3.png" },
    { id: 2, url: "/photo1.png" },
    { id: 3, url: "/photo5.png" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  const leftMove = () => {
    if (currentSlide == 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const rightMove = () => {
    if (currentSlide == slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const roundClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full w-max-[2000px]  duration-500 group">
      {/* <div
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 transition-transform"
      ></div> */}
      <div className="flex overflow-x-hidden w-[100%] snap-center ">
        {slides.map((item) => {
          return (
            <Image
              key={item.id}
              quality={100}
              layout="responsive"
              width={2000}
              height={1400}
              src={item.url}
              alt={item.id.toString()}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              className=" duration-500 delay-100 ease-in-out"
            />
          );
        })}
      </div>

      <div className="hidden group-hover:block absolute top-[50%] left-10 cursor-pointer duration-300  md:text-3xl">
        <FaChevronLeft color="white" onClick={leftMove} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] right-10 cursor-pointer duration-300 md:text-3xl">
        <FaChevronRight color="white" onClick={rightMove} />
      </div>
      <div className="hidden sm:flex text-xs ms:text-sm items-center justify-center gap-4 absolute bottom-4 left-[50%] text-white cursor-pointer -translate-x-1/2 -translate-y-1/2">
        {slides.map((item) => {
          return (
            <FaCircle
              key={item.id}
              className={clsx({
                "duration-300": true,
                "text-light-primary": item.id - 1 == currentSlide,
              })}
              onClick={() => setCurrentSlide(item.id - 1)}
            />
          );
        })}
      </div>
      <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2  text-white">
        <div className="flex flex-col">
          <div>
          <h1
            className={`${greatVibes.className} inline-block text-3xl md:text-5xl lg:text-8xl`}
          >
            {name}
          </h1>
          <br />
          <h2 className={`${cinzelDecorative.className} md:text-2xl text-lg `}>
            {date}
          </h2>
          </div>
          <div className="mt-10">
            <Link href={'/r-s-v-p'} className="bg-light-primary py-2 text-sm md:text-xl md:py-3 px-3 md:px-5 rounded ">-RSVP-</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
