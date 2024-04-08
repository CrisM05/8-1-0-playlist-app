const Playlist = require("../models/Playlist");
const playlist = new Playlist();

const addSong = (req, res) => {
  const data = req.body;
  playlist.add(data);
  res.statusCode(200);
  res.send("Song added");
};

const getAllSongs = (req, res) => {
  res.send(playlist.getAllsongs());
};

const getSong = (req, res) => {
  const id = req.query.id;
  res.send(playlist.get(id));
};

const update = (req, res) => {
  const id = req.query.id;
  const data = req.body;
  playlist.set(id, data);
  res.statusCode(200);
  res.send(`${data.name} updated.`);
};

const remove = (req,res) => {
    const id = req.query.id;
    const song = playlist.delete(id);
    res.statusCode(200);
    res.send(`${song.name} deleted`);
};

module.exports = { addSong, getAllSongs, getSong, update, remove };
