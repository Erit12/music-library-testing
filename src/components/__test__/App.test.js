
import { render, screen, fireEvent } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import App from "../../App";
import { Provider } from "react-redux";
import store from '../../redux/store.js';
import { MemoryRouter } from "react-router-dom";

// Mock de SearchResults para controlar los resultados
jest.mock("../SearchResults", () => ({ searchTerm }) => (
  <div>
    <p>Resultados para: {searchTerm}</p>
    <button onClick={() => {}}>Agregar a mi biblioteca</button>
  </div>
));

// Mock de Library para visualizar canciones agregadas
jest.mock("../Library", () => ({ songs }) => (
  <div>
    <h2>Mi Biblioteca</h2>
    {songs.length === 0
      ? <p>No hay canciones</p>
      : songs.map((s) => <p key={s.idTrack}>{s.strTrack}</p>)}
  </div>
));

describe("Componente App", () => {
  test("Renderiza los componentes principales", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Mi Biblioteca Musical")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Busca un artista.../i)).toBeInTheDocument();
    expect(screen.getByText("Mi Biblioteca")).toBeInTheDocument();
  });

  /*test("Simula búsqueda de canciones", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/busca un artista/i);
    fireEvent.change(input, { target: { value: "Coldplay" } });
    fireEvent.click(screen.getByRole("button", { name: /buscar/i }));

    expect(screen.getByText(/resultados para: coldplay/i)).toBeInTheDocument();
  });

  test("Simula agregar canción a la biblioteca", () => {
    // Mock temporal para agregar canción
    jest.mock("../../components/SearchResults", () => ({ searchTerm }) => (
      <div>
        <p>Resultados para: {searchTerm}</p>
        <button
          onClick={() =>
            window.__addSong &&
            window.__addSong({ idTrack: "1", strTrack: "Song 1" })
          }
        >
          Agregar a mi biblioteca
        </button>
      </div>
    ));

    const { rerender } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Simular búsqueda
    const input = screen.getByPlaceholderText(/busca un artista/i);
    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.click(screen.getByRole("button", { name: /buscar/i }));

    // Simular agregar canción
    const addButton = screen.getByRole("button", { name: /agregar a mi biblioteca/i });
    fireEvent.click(addButton);

    rerender(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/song 1/i)).toBeInTheDocument();
  });*/
});
