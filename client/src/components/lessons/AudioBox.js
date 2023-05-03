import { useEffect, useRef } from "react";
import "../../styles/audioBox.css";

const playAudioOnMount = (audioHasPlayedRef, audioSrc) => {
  if (!audioHasPlayedRef.current) {
    const initialAudio = new Audio(audioSrc);
    setTimeout(() => {
      initialAudio.play();
    }, 1000);
  }
  audioHasPlayedRef.current = true;
};

const AudioBox = ({ audio, slowAudio }) => {
  const hasPlayedAudioRef = useRef(null);

  const audioElement = new Audio(audio);
  const slowAudioElement = new Audio(slowAudio);

  useEffect(() => {
    // Have the audio only play once during initial render
    playAudioOnMount(hasPlayedAudioRef, audio);
  }, [audio, hasPlayedAudioRef]);

  const handleAudioClick = () => audioElement.play();
  const handleSlowAudioClick = () => slowAudioElement.play();

  return (
    <div className="audio-box-wrapper">
      <div className="audio-box normal-audio" onClick={handleAudioClick}>
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/sound.svg`}
          alt="sound icon"
          width="140px"
        />
      </div>
      <div className="audio-box slow-audio" onClick={handleSlowAudioClick}>
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/slow_audio.svg`}
          alt="turtle icon"
          width="100px"
        />
      </div>
    </div>
  );
};

export default AudioBox;
