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
