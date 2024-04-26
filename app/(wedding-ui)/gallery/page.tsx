'use client'
import React, { useEffect } from 'react'
import View from '../home/view'
import { cinzel, greatVibes } from '@/app/fonts'
import Navbar from '../home/navbar'
import AudioPlayer from '@/app/audio/audio'
import { getAudioInstance } from '@/app/lib/utils'
const Gallery = () => {
  useEffect(() => {
    const audio = getAudioInstance();
    audio.loop = true; // Loop the audio
    audio.play(); // Start playing the audio
    return () => {
      audio.pause(); // Pause the audio when component unmounts
    };
  }, []);
  return (
    <div>
      <div className="absolute top-6 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="h-20 bg-light-secondary flex flex-col text-center justify-center items-center"></div>
      <div className="flex flex-col items-center h-40 justify-center">
        <h1 className={`${cinzel.className} text-4xl`}>OUR GALLERY</h1>
        <h2 className={`${cinzel.className} text-xl pt-5`}>2024-09-07</h2>
      </div>
      <View/>
    </div>
  )
}

export default Gallery