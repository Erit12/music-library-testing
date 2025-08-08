


import { render, screen, fireEvent } from "@testing-library/react";
import Song from "../Song";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import  librarySlice, { removeSong } from "../../redux/slices/librarySlice";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../theme/GlobalStyle.js';
import Theme from '../../theme/index.js';


jest.mock("../../redux/slices/librarySlice", () => ({
  removeSong: jest.fn(),
}));


const mockStore = configureStore({
  reducer: {
    library: librarySlice
  },
  preloadedState: {
    library: [
      {
        idTrack: "123",
        strTrack: "Canción Uno",
        strArtist: "Artista Uno"
      }
    ]
  }
});



describe("Componente Song", () => {
  test("La canción se muestra correctamente", () => {
    const store = mockStore;
    const song = {
      idTrack: "1",
      strTrack: "Song 1",
      strArtist: "Artist 1",
      strAlbum: "Album 1",
    };

    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Song song={song} />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText(/song 1/i)).toBeInTheDocument();
    expect(screen.getByText(/artist 1/i)).toBeInTheDocument();
    expect(screen.getByText(/\(album 1\)/i)).toBeInTheDocument();
  });

  test("El botón 'Eliminar' ejecuta la acción al hacer clic", () => {
    const store = mockStore;
    store.dispatch = jest.fn();

    const song = {
      idTrack: "1",
      strTrack: "Song 1",
      strArtist: "Artist 1",
      strAlbum: "Album 1",
    };

    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Song song={song} />
        </ThemeProvider>
      </Provider>
    );

    const boton = screen.getByRole("button", { name: /eliminar/i });
    fireEvent.click(boton);

    expect(store.dispatch).toHaveBeenCalled();
    expect(removeSong).toHaveBeenCalledWith("1");
  });


});
