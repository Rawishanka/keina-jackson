// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex justify-center items-center">
//       <Link className="bg-light-primary px-8 py-5 text-white hover:bg-blue-700" href={"/home"} >Go To Home</Link>
//     </main>
//   );
// }
'use client'
import React, { useEffect, useState } from "react";
import Navbar from "./(wedding-ui)/home/navbar";
import Slider from "./(wedding-ui)/home/slider";
import DateBannar from "./(wedding-ui)/home/date-banner";
import AboutCouple from "./(wedding-ui)/home/about-couplt";
import ReservationForm from "./(wedding-ui)/home/reservation-form";
import Ceremony from "./(wedding-ui)/home/ceremony";
import ContactsUs from "./(wedding-ui)/home/contact-us";
import Info from "./(wedding-ui)/home/info";
import View from "./(wedding-ui)/home/view";
import { cinzel, greatVibes } from "@/app/fonts";
import Quots from "./(wedding-ui)/home/quots";
import { getAudioInstance } from "./lib/utils";
const HomePage = () => {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    if (!audioStarted) {
      const audio = getAudioInstance();
      audio.play();
      setAudioStarted(true);
    }
  }, [audioStarted]);


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
      <div>
        <Quots />
      </div>
      {/* <div className="h-40 bg-light-secondary flex flex-col text-center justify-center items-center ">
        <h1 className={`${cinzel.className} md:text-4xl text-white`}>
        The best gift is your patecipation, thanks to all
        </h1>
        <h2 className={`${greatVibes.className} text-white md:text-2xl pt-2`}>
        Christin & Thomas
        </h2>
      </div> */}
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
