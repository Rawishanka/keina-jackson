// utils/audio.js
let audioInstance:any = null;

export const getAudioInstance = () => {
  if (!audioInstance) {
    audioInstance = new Audio('/invite.mp3');
    audioInstance.loop = true;
    audioInstance.play();
  }
  return audioInstance;
};

let audioHinduInstance:any = null;
export const getHinduAudioInstance = () => {
  if (!audioHinduInstance) {
    audioHinduInstance= new Audio('/hindu.mp3');
    audioHinduInstance.loop = true;
    audioHinduInstance.play();
  }
  return audioHinduInstance;
};