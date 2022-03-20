import React, { useContext } from "react";
// context
import { SongContext } from "../context/SongContextProvider";

const MusicList = () => {
  const songsList = useContext(SongContext);

  return (
    <div>
      {songsList.map((item) => (
        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between mx-5 music-list mb-5"
          key={item.id}
        >
          <img className="img-fluid list-cover" src={item.cover} alt="Cover" />
          <h5>{item.songName}</h5>
          <p>{item.singer}</p>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
