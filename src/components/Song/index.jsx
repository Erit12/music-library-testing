
import { SongLibraryContainer, RemoveButton } from "./style";
import { useDispatch } from "react-redux";
import { removeSong } from "../../redux/libraryActions";

function Song({ song }) {

  const dispatch = useDispatch();


  return (
    <SongLibraryContainer >
      <p>Cancion: <strong>{song.strTrack}</strong> - Artista:  {song.strArtist} - Album: ({song.strAlbum})</p>
      <RemoveButton onClick={() => dispatch(removeSong(song.idTrack))}>
        Eliminar
      </RemoveButton>
    </SongLibraryContainer>
  );
}

export default Song;