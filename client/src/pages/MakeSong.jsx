import { useEffect } from "react";
import fetchData from "../utils/utils";

const MakeSong = () => {
    useEffect(() => {
        const getPlaylists = async() => {
            const [playlist] = fetchData('/api/playlists')
        }
    },[]);
    
    return (
        <div className="form">
            <form>
                <label htmlFor="create-song-name">Name: </label>
                <input type="text" id="create-song-name" name="name" placeholder="Name..."/>
                <label htmlFor="create-song-artist">Artist: </label>
                <input type="text" id="create-song-artist" name="artist" placeholder="Artist..."/>
                <select name="playlist-name" id="create-song-playlist">
                    
                </select>
                <button>Create</button>
            </form>
        </div>
    );
}

export default MakeSong;
