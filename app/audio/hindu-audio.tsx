import { useEffect, useState } from "react";
import { getHinduAudioInstance } from "../lib/utils";

const HinduAudioPlayer = () => {
    const [audio] = useState(getHinduAudioInstance);
  
    useEffect(() => {
      audio.loop = true; // Loop the audio
      audio.play(); // Start playing the audio
  
      return () => {
        audio.pause(); // Pause the audio when the component unmounts
      };
    }, [audio]);
  
    return null; // This component doesn't render anything, it only handles audio playback
  };
  
  export default HinduAudioPlayer;