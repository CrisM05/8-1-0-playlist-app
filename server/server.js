const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
const pathToDist = path.join(__dirname, "../client/dist");
const {
  addSong,
  getAllSongs,
  getSong,
  update,
  remove,
} = require("./controllers/PlaylistControllers");

app.use(express.json());

app.post("/api/song", addSong);

app.get("/api/songs", getAllSongs);

app.get("/api/song:id", getSong);

app.patch("/api/song:id", update);

app.delete('/api/song:id', remove)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
