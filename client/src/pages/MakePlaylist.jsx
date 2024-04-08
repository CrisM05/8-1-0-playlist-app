export default function MakePlaylist() {
  return (
    <div className="form" id="makePlaylist">
        <form>
            <label htmlFor="create-playlist-title">Title: </label>
            <input type="text" id="create-playlist-title" name="title" placeholder="Title..." />
            <button>Create</button>
        </form>
    </div>  )
}
