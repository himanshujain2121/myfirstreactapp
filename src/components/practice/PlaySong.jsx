import React, { useRef } from 'react'
import Song1 from "../../../public/parvati.mp4"

const PlaySong = () => {

    let audioRef = useRef(null);

    let playAudio = ()=>{
        audioRef.current.play();
    }

    let pauseAudio = ()=>{
        audioRef.current.pause();
    }

  return (
    <div>
      <audio ref={audioRef} src={Song1}></audio>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  )
}

export default PlaySong
