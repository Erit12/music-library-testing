import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { Provider } from "react-redux";
import store from '../../redux/store.js';
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../theme/GlobalStyle.js';
import Theme from '../../theme/index.js';


jest.mock("../../../src/redux/slices/searchSlice", () => ({
  fetchSongs: jest.fn(),
}));

//const mockStore = configureStore([thunk]);

describe("Componente SearchBar", () => {

  beforeEach(() => {
    //store = mockStore({});
    store.dispatch = jest.fn();
  });
  

  test("El input de búsqueda se renderiza correctamente", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
            <SearchBar />
        </ThemeProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText(/busca un artista/i);
    expect(input).toBeInTheDocument();
  });

  test("El usuario puede escribir en el input y el valor cambia", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
            <SearchBar />
        </ThemeProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText(/busca un artista/i);
    fireEvent.change(input, { target: { value: "Coldplay" } });
    expect(input.value).toBe("Coldplay");
  });

  test("La función de búsqueda se ejecuta al hacer clic en el botón 'Buscar'", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
            <SearchBar />
        </ThemeProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText(/busca un artista/i);
    const boton = screen.getByRole("button", { name: /buscar/i });

    fireEvent.change(input, { target: { value: "Adele" } });
    fireEvent.click(boton);

    expect(store.dispatch).toHaveBeenCalled();
    //expect(fetchSongs).toHaveBeenCalledWith("Adele");
  });

  test("La función de búsqueda se ejecuta al presionar Enter", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
            <SearchBar />
        </ThemeProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText(/busca un artista/i);

    fireEvent.change(input, { target: { value: "Oasis" } });
    fireEvent.submit(input.closest("form"));

    expect(store.dispatch).toHaveBeenCalled();
    //expect(fetchSongs).toHaveBeenCalledWith("Oasis");
  });
});