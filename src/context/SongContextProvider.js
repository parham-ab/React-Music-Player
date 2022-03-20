import React, { useState } from "react";
// context
export const SongContext = React.createContext();

const SongContextProvider = ({ children }) => {
  const [songsData, setSongsData] = useState([
    {
      id: 1,
      songName: "Rock Star",
      singer: "Post Malone",
      cover: "https://i1.sndcdn.com/artworks-000313295511-m8lnbv-t500x500.jpg",
      track:
        "https://dlmain.gandommusic.ir/mp3/1/Post%20Malone%20ft.%2021%20Savage%20-%20Rockstar%20%28%20GandomMusic.ir%20%29.mp3",
      active: true,
    },
    {
      id: 2,
      songName: "Russian Roulette",
      singer: "Rihanna",
      cover: "https://i1.sndcdn.com/artworks-000142845756-9jtw2d-t500x500.jpg",
      track:
        "https://files.musicfeed.ir/dir/2020/12/Rihanna%20Russian%20Roulette%20128.mp3",
      active: false,
    },
    {
      id: 3,
      songName: "We Dont Talk Anymore",
      singer: "Selena Gomez ft. Charlie Puth",
      cover: "https://i1.sndcdn.com/artworks-000174747280-2alavp-t500x500.jpg",
      track:
        "https://files.musicfeed.ir/2020/03/Charlie-Puth-ft.-Selena-Gomez-We-Dont-Talk-Anymore-128.mp3",
      active: false,
    },
    {
      id: 4,
      songName: "Save Your Tears",
      singer: "Weekend",
      cover:
        "https://i1.sndcdn.com/artworks-Cx8HPSUjtGBTxabR-k8s54g-t500x500.jpg",
      track:
        "https://files.musicfeed.ir/2020/03/The-Weeknd-Save-Your-Tears-128.mp3",
      active: false,
    },
  ]);

  return (
    <SongContext.Provider value={songsData}>{children}</SongContext.Provider>
  );
};

export default SongContextProvider;
