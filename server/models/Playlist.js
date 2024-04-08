const Song = require("./Song.js");

class Playlist { 
    static #allPlaylists = [];
    
    #songs = [];
    
    constructor(title,...songs) {
        this.title = title;
        for (const song in songs) {
            this.add(new Song (song));
        }
        Playlist.#allPlaylists.push(this);
    }

    add(song) {
        this.#songs.push(song);
    }
    
    delete(id) {
        const song = this.#songs[this.#songs.findIndex(el => el.id === id)];
        this.#songs = this.#songs.filter(el => el.id !== id);
        return song;
    }

    get(id) {
        return this.#songs.find(el => el.id === id);
    }

    getAllsongs() {
        return [...this.#songs];
    }
    
    set(id,{name,artist}) {
        const song = this.#songs.find(el => el.id === id);
        song.name = name || song.name;
        song.artist = artist || song.artist;
        return song;
    }
    
}

module.exports = Playlist;