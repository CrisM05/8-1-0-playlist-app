import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MakePlaylist from "./pages/MakePlaylist";
import MakeSong from "./pages/MakeSong";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <main>
        <h1>Your Playlist(s)</h1>
        <Nav />
        <Routes>
          <Route path="/make/playlist" element={<MakePlaylist />} />
          <Route path="/make/song" element={<MakeSong />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
