'use client'
import React from "react";
import ContactsUs from "../home/contact-us";
import Navbar from "../home/navbar";
import { cinzel, greatVibes } from "@/app/fonts";
import AudioPlayer from "@/app/audio/audio";

const Contacts = () => {
  return (
    <div className="relative">
      <div className="absolute top-6 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="h-20 bg-light-secondary flex flex-col text-center justify-center items-center"></div>
      <ContactsUs />
    </div>
  );
};

export default Contacts;
