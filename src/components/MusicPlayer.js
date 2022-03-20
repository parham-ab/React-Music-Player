import React, { useContext, useEffect, useRef, useState } from "react";
// context
import { SongContext } from "../context/SongContextProvider";
// icons
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";

const MusicPlayer = () => {
  const songs = useContext(SongContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [number, setNumber] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullTime, setFullTime] = useState(0);
  const audio = useRef();
  const getCleanTime = (time) => {
    return `${Math.floor(time / 60)} : ${("0" + Math.floor(time % 60)).slice(
      -2
    )}`;
  };
  //   const currentTime = audio.current.currentTime;
  useEffect(() => {
    isPlaying ? audio.current.play() : audio.current.pause();
    setInterval(() => {
      setCurrentTime(audio.current.currentTime);
      setFullTime(audio.current.duration);
    }, 1000);
  }, [isPlaying]);

  // play / pause
  const playHandler = () => {
    setIsPlaying(!isPlaying);
  };
  // next song
  const nextHandler = () => {
    setNumber(() => number + 1);
    if (number > 2) {
      setNumber(0);
    }
    playHandler();
  };
  //   previous song
  const prevHandler = () => {
    setNumber(() => number - 1);
    if (number < 1) {
      setNumber(3);
    }
  };
  const slider = useRef();
  return (
    <div className="musicPlayer d-flex flex-column align-items-center my-5">
      <img
        src={songs[number].cover}
        alt="Cover"
        className="rounded shadow-lg w-25"
      />
      <h1 className="mt-3 text-center">
        {songs[number].songName.toUpperCase()}
      </h1>
      <p>{songs[number].singer}</p>
      <div>
        <span className="time">{getCleanTime(currentTime)}</span>
        <input
          ref={slider}
          value={currentTime}
          min={0}
          max={fullTime}
          onChange={(e) => (audio.current.currentTime = e.target.value)}
          className="mx-md-3 mx-1 music-slider"
          type="range"
          step={0.1}
        />
        <span className="time">{getCleanTime(fullTime)}</span>
      </div>
      <div className="my-3 icons-container">
        <span onClick={prevHandler}>
          <IoMdSkipBackward />
        </span>
        <span onClick={playHandler} className="px-3">
          {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </span>
        <span onClick={nextHandler}>
          <IoMdSkipForward />
        </span>
      </div>
      <audio
        onEnded={() => nextHandler()}
        ref={audio}
        src={songs[number].track}
      ></audio>
    </div>
  );
};

export default MusicPlayer;
