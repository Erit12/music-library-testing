
import { render, screen } from "@testing-library/react";
import Library from "../Library";
import { configureStore } from "@reduxjs/toolkit";
import librarySlice from "../../redux/slices/librarySlice.js";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../theme/GlobalStyle.js';
import Theme from '../../theme/index.js';
import { Provider } from 'react-redux';
import store from '../../redux/store.js';

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

test("renderiza canciones en la biblioteca", () => {
  render(
    <Provider store={mockStore}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Library />
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByText(/Canción Uno/i)).toBeInTheDocument();
  expect(screen.getByText(/Artista Uno/i)).toBeInTheDocument();
});

test("muestra botón Eliminar por cada canción", () => {
  render(
    <Provider store={mockStore}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Library />
      </ThemeProvider>
    </Provider>
  );
  const boton = screen.getByRole("button", { name: /eliminar/i });
  expect(boton).toBeInTheDocument();
});

test("muestra mensaje si la biblioteca está vacía", () => {
  const emptyStore = configureStore({
    reducer: {
      library: librarySlice
    },
    preloadedState: {
      library: []
    }
  });

  render(
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Library />
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByText(/No has agregado canciones aún./i)).toBeInTheDocument();
});
