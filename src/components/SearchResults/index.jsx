import { TextEncoder, TextDecoder } from 'text-encoding';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResultsContainer, ResultTitle, SongBlock, AlbumTitle } from "./style";

function SearchResults() {

  const { results, loading, error } = useSelector((state) => state.search);

  if (loading) return <ResultsContainer><p>Cargando...</p></ResultsContainer>;
  if (error) return <ResultsContainer><p>Error: {error}</p></ResultsContainer>;
  if (!results.length) return <ResultsContainer><p>No hay resultados.</p></ResultsContainer>;

  return (
    <ResultsContainer>
      <ResultTitle>Resultados de Búsqueda</ResultTitle>
      { results.map((album) => (
        <SongBlock key={album.idAlbum}>
          <Link to={`/song/${album.idAlbum}`}>
            <AlbumTitle><strong>{album.strAlbum}</strong> - {album.strArtist}</AlbumTitle>
          </Link>
          </SongBlock>
      ))}
    </ResultsContainer>
  );
}

export default SearchResults;
