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
        Join Samuel and Vidya as they embark on a journey of love and adventure! From traveling the globe to creating cherished memories, 
        they&apos;ve discovered a shared passion for exploration. Whether it&apos;s ATVing in Mexico or indulging in new cuisines, 
        their adventures have only deepened their bond. Apart from creating their own memories, Samuel and Vidya dedicate much of their time 
        to being with their loved ones, demonstrating their deep appreciation for family above all else

        </p>
        <p className={`${halant.className} text-left pt-6 px-10 md:px-0 tracking-wide  `}>
        Their love story reached a new milestone during a romantic trip to Costa Rica in 2021. Samuel orchestrated a breathtaking proposal 
        at the &quot;Alma De Pacifico&quot; restaurant, leading Vidya to the Don Toro beach adorned with roses, candles, and a heartfelt plea, 
        &quot;Marry Me?&quot; With Ed Sheeran&apos;s &quot;Perfect&quot; playing in the background, he popped the question, and she joyfully accepted. 
        Their evening continued with a private beachfront dinner, basking in the glow of their engagement.
        </p>
        <p className={`${halant.className} text-left pt-6 px-10 md:px-0 tracking-wide `}>
        Now, Samuel and Vidya eagerly anticipate sharing their special day with cherished friends and family this September. 
        It&apos;s more than a wedding; it&apos;s a celebration of their union and the love they hold dear. Join them as they dance the night away, 
        marking the beginning of a beautiful new chapter together!
        </p>
      </div>
    </section>
  );
};

export default Info;
