'use client'
import React from "react";
import Image from "next/image";
import { cinzel, greatVibes, halant } from "@/app/fonts";
import Navbar from "../home/navbar";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import HinduAudioPlayer from "@/app/audio/hindu-audio";

const Christian = () => {
  return (
    <section className="realtive ">
      <div className="absolute top-6 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="h-20 bg-light-secondary flex flex-col text-center justify-center items-center"></div>
      <div className="flex flex-col items-center h-40 justify-center">
        <h1 className={`${cinzel.className} text-xl md:text-4xl`}>
          HINDU CEREMONY
        </h1>
        <h2 className={`${cinzel.className} md:text-xl pt-5`}>09-06-2024</h2>
      </div>

    
    <div className="flex flex-wrap lg:flex-nowrap w-full justify-between bg-light-primary">
      {/* left side */}
      <div className="lg:w-1/2 flex flex-col bg-light-primary">
        <div className="relative group overflow-hidden">
          <Image
            className=""
            src={"/photo9.png"}
            width={2000}
            height={1400}
            alt={"photo 1"}
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex lg:w-1/2 flex-col justify-center bg-light-primary">
        <div className="bg-light-primary">
          <div className=" text-white sm:px-10 px-3 w-full">
            <h1 className={`${cinzel.className} lg:text-6xl text-3xl mt-3`}>
              Hindu Ceremony
            </h1>
            <h2 className={`${cinzel.className} text-xl lg:text-3xl mt-4`}>
              September 6 2024
            </h2>
            <p
              className={`${halant.className} mt-8 text-base tracking-wide line-clamp-6 leading-loose mb-8 lg:text-lg`}
            >
              Address - Mandir :Shri Radha Krishna Mandir 126-04 133rd Ave,
              South Ozone Park, NY 11420
              <br />
              Time: 2:00 pm
              <br />
              Dress Code: Traditional Indian Clothing
            </p>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.139380529305!2d-73.81289160000001!3d40.6708978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26715fb525079%3A0x2ec9d6e29a3869a7!2sShri%20Radha%20Krishna%20Mandir!5e0!3m2!1sen!2slk!4v1713644982219!5m2!1sen!2slk"
                width="auto"
                height="90"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full lg:mb-0 mb-4"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  );
};

export default Christian;
