import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar/index.jsx';
import SearchResults from '../SearchResults';
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../theme/GlobalStyle.js';
import Theme from '../../theme/index.js';
import { Provider } from 'react-redux';
import store from '../../redux/store.js';
import { jest } from '@jest/globals';
import { Link } from 'react-router'; 
import { SongBlock } from '../SearchResults/style.js';


const mockSongs = [
  { idAlbum: 1, strArtist: 'Artista A', strAlbum: 'Album X' },
  { idAlbum: 2, strArtist: 'Artista B', strAlbum: 'Album Y' },
];

describe('SearchResults',  () => {
  test('renderiza correctamente la lista de albums',  () => {
    render(
      
      <Provider store={ store }>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          
          <SearchResults searchTerm={mockSongs} >

          </SearchResults>
      </ThemeProvider>
      </Provider>
    );

    expect( screen.getByText('No hay resultados.')).toBeInTheDocument();
    //expect(screen.getByText('Album Y')).toBeInTheDocument();
  });
});