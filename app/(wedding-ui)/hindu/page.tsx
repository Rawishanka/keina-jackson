import React from "react";
import Image from "next/image";
import { cinzel, greatVibes, halant } from "@/app/fonts";
import Navbar from "../home/navbar";

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
        <h2 className={`${cinzel.className} md:text-xl pt-5`}>2024-09-07</h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center bg-light-primary">
        {/* left-side */}

        <div className="lg:w-1/3 bg-light-primary text-white lg:px-14 flex flex-col px-10">
          <h1 className={`${cinzel.className} text-xl md:text-3xl mt-11`}>
          Hindu Ceramony
          </h1>
          <h2 className={`${cinzel.className} md:text-xl mt-4`}>
          September 6 2024
          </h2>
          <p
            className={`${halant.className} mt-8 text-base tracking-wide leading-loose`}
          >
            Address - Mandair :Shri Radha Krishna Mandir
126-04 133rd Ave, South Ozone Park, NY 11420
          </p>
          <p className={`${halant.className} mt-2 text-base tracking-wide leading-loose `}>Time: 2:00 pm  </p>
          <p className={`${halant.className} mt-2 text-base tracking-wide leading-loose mb-5`}>Dress Code: Traditional Indian Clothing</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.139380529305!2d-73.81289160000001!3d40.6708978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26715fb525079%3A0x2ec9d6e29a3869a7!2sShri%20Radha%20Krishna%20Mandir!5e0!3m2!1sen!2slk!4v1713644982219!5m2!1sen!2slk"
              width="auto"
              height="150"
              style={{ border: 0 }}
            allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        {/* right-side */}

        <div className="lg:w-2/3 mt-5 md:mt-0">
          <Image
            src={"/photo5.png"}
            width={2000}
            height={1400}
            quality={100}
            layout="responsive"
            alt={""}
          />
        </div>
      </div>
      <audio autoPlay loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Christian;
