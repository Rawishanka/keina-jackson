"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { cinzel, greatVibes, halant } from "@/app/fonts";
import Navbar from "../home/navbar";

const Hindu = () => {
  useEffect(() => {
    const audio = new Audio("/invite.mp3");
    audio.loop = true; // Loop the audio
    audio.play(); // Start playing the audio
    return () => {
      audio.pause(); // Pause the audio when component unmounts
    };
  }, []);
  return (
    <section className="realtive ">
      <div className="absolute top-6 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="h-20 bg-light-secondary flex flex-col text-center justify-center items-center"></div>
      <div className="flex flex-col items-center h-28 md:h-40  justify-center">
        <h1 className={`${cinzel.className} text-xl md:text-4xl`}>
          CHRISTIAN CEREMONY
        </h1>
        <h2 className={`${cinzel.className} text-sm md:text-xl pt-5`}>
          2024-09-08
        </h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:bg-light-primary">
        {/* left-side */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={"/photo10.png"}
            width={2000}
            height={1400}
            quality={100}
            layout="responsive"
            alt={""}
          />
        </div>
        {/* right-side */}
        <div className="lg:w-1/2 w-full bg-light-primary text-white lg:px-8 flex flex-col justify-start px-8">
          <div className="">
            <h1 className={`${cinzel.className} text-2xl lg:text-3xl mt-11`}>
              Christian Ceramony
            </h1>
            <div>
              <h2 className={`${cinzel.className} md:text-2xl mt-2`}>
                September 7 2024
              </h2>
              <p
                className={`${halant.className} mt-4 lg:text-xl text-base tracking-wide leading-loose mb-8`}
              >
                Global christian ministry 8615 114th St, Jamaica, NY 11418{" "}
                <br />
                Time: 2:00pm <br />
                Dress Code: Traditional Indian Clothing
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.852515722207!2d-73.8347265!3d40.699245700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260ac1e2f6be9%3A0xa4685cecdaed7b30!2sGlobal%20Christian%20Ministries%20I!5e0!3m2!1sen!2slk!4v1713642281795!5m2!1sen!2slk"
            width="auto"
            height="100"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-auto"
          ></iframe>
          <div className="">
            <h1 className={`${cinzel.className} text-2xl md:text-3xl mt-11`}>
              Reception Villa La Russo
            </h1>
            <h2 className={`${cinzel.className} md:text-2xl mt-2`}>
              September 7 2024
            </h2>
            <p
              className={`${halant.className} mt-4 lg:text-xl text-base tracking-wide leading-loose mb-8`}
            >
              Address : Villa La Russo 101-12 Lefferts Blvd, Richmond Hill, NY
              11419 <br />
              Time : 6:30pm-12:00am <br />
              Dress Code : Formal Clothing
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2956132124273!2d-73.8260543!3d40.6894867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2674c44393e47%3A0x5c93fa8b46e756e0!2sVilla%20Russo!5e0!3m2!1sen!2slk!4v1713643307178!5m2!1sen!2slk"
            width="auto"
            height="100"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <div>
            <h1 className={`${cinzel.className} text-2xl md:text-3xl mt-11`}>
              Reception
            </h1>
            <h2 className={`${cinzel.className} md:text-xl mt-2`}>
              September 7 2024
            </h2>
            <p
              className={`${halant.className} mt-4 text-base tracking-wide leading-loose mb-8`}
            >
              Reception: Villa La Russo <br />
              Address : 101-12 Lefferts Blvd, Richmond Hill, NY 11419 <br />
              Time : 6:30pm-12:00am <br />
              Dress Code : Formal Clothing <br />
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.852515722207!2d-73.8347265!3d40.699245700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260ac1e2f6be9%3A0xa4685cecdaed7b30!2sGlobal%20Christian%20Ministries%20I!5e0!3m2!1sen!2slk!4v1713642281795!5m2!1sen!2slk"
            width="400"
            height="75"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
      <audio autoPlay loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Hindu;
