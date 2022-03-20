import React from "react";
// components
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";
// context
import SongContextProvider from "./context/SongContextProvider";

const App = () => {
  return (
    <SongContextProvider>
      <MusicPlayer />
      <MusicList />
    </SongContextProvider>
  );
};

export default App;
