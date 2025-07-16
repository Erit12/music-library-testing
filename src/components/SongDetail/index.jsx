// src/components/SongDetail.js
import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailContainer, AlbumTitle, AddButton, SongContainer, PreviousPage } from "./style";
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/slices/librarySlice"
import axios from "axios";

function SongDetail() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const res = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/track.php?m=${id}`);
        const data = res.data;
        //console.log(data);
        setAlbum(data.track || null);
      } catch (err) {
        setError("Error al obtener los detalles del álbum");
      } finally {
        setLoading(false);
      }
    };
    fetchAlbum();
  }, [id]);

    
  if (loading) return <DetailContainer><p>Cargando...</p></DetailContainer>;
  if (error) return <DetailContainer><p>{error}</p></DetailContainer>;
  if (!album) return <DetailContainer><p>Álbum no encontrado.</p></DetailContainer>;
  
  return (
    <DetailContainer>
      <Link to={`/`}><PreviousPage>Go back</PreviousPage></Link>
      { album.map((song) => (
        <SongContainer key={song.idTrack}>
          
            <AlbumTitle>Cancion: <strong>{song.strTrack}</strong> - Artista:  {song.strArtist}  -  Album: {song.strAlbum}</AlbumTitle>
            <AddButton onClick={() => dispatch(addSong(song))}>Agregar a mi biblioteca</AddButton> 
          
        </SongContainer>
      ))}
    </DetailContainer>
  );
}

export default SongDetail;
