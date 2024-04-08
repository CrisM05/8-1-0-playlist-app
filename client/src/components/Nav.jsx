import {useNavigate} from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    const goTo = (endpoint) => {
        navigate(endpoint);
    }
    
  return (
    <nav>
        <ul>
            <li><button onClick={() => goTo('/make/playlist')}> Make PlayList </button></li>
            <li><button onClick={() => goTo('/make/song')}> Make Song </button></li>
            <li><button onClick={() => goTo('/playlist')}> Playlist </button></li>
        </ul>
    </nav>
  )
}
