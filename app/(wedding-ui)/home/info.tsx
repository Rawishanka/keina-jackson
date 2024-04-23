'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { cinzel, halant } from "@/app/fonts";

const Info = () => {
  return (
    <section className=" flex flex-wrap md:justify-evenly  w-full">
      <div className="hidden lg:block lg:w-1/2 rounded relative ">
        <Image
          className="rounded w-auto lg:object-cover"
          // width={2000}
          // height={1200}
          layout="fill"
          src={"/photo3.png"}
          alt={"info-image"}
          //style={{objectFit: 'cover'}}
        />
      </div>
      <div className="flex lg:hidden w-full rounded">
        <Image
          className="rounded lg:object-cover"
          width={2000}
          height={1200}
          src={"/photo3.png"}
          alt={"info-image"}
          //style={{objectFit: 'cover'}}
        />
      </div>
      <div className={`${cinzel.className} lg:w-1/2 flex flex-col md:px-20 items-center`}>
        <h1 className="text-3xl pt-3">OUR STORY</h1>
        <h2 className="text-xl pt-3">Our Journey Together</h2>
        <p className={`${halant.className} text-left pt-3 px-10 md:px-0 tracking-wide `}>
        Traveling the world together and making memories became their favorite activity. 
        From ATVing in Mexico to climbing waterfalls in Jamica, traveling, and making memories has become a passion for them. 
        They love going on adventures, eating at new restaurants and discovering new activities. Some of their hobbies include 
        taking drives and finding beautiful places to explore. Other than making their own memories youll find Samuel and Vidya 
        spending time with their loved ones. Therefore, they both cherish family over everything else.

        </p>
        <p className={`${halant.className} text-left pt-6 px-10 md:px-0 tracking-wide  `}>
        Their proposal story begins on their 2021 trip to Costa Rica. They arrived at a restaurant there called &quot;Alma De Pacifico&quot;. 
        Samuel then blindfolded Vidya and led her through the restaurant to the beach. He took the blindfold off of her revealing the 
        Don Toro beach surrounded by rose petals, candles, and a sign that said, “Marry Me?”. In the background played the song Perfect 
        by Ed Sheeran. He popped the question and she said Yes! The rest of their night was spent enjoying a private dinner on the beach 
        letting it sink in that they were engaged! 
        </p>
        <p className={`${halant.className} text-left pt-6 px-10 md:px-0 tracking-wide `}>
        Samuel and Vidya can’t wait to celebrate with you at their wedding ceremonies and reception in September! Their wedding day is 
        not just about celebrating their love; it’s about joining their lives in front of all their cherished friends and family. 
        They can’t wait to dance the night away and embark on this beautiful adventure together!
        </p>
      </div>
    </section>
  );
};

export default Info;
