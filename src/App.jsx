import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SongDetail from "./components/SongDetail";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle.js";
import Theme from "../src/theme/index.js";


const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large};
`;


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {

    if (!library.find((s) => s.idTrack === song.idTrack)) {
      setLibrary([...library, song]);
    }
  };

  /*useEffect(() => {
    console.log("La biblioteca se ha actualizado:", library);
  }, [library]);*/

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

        <Header />
        <SearchBar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path="/"
            element={
              <Sections>
                <SearchResults searchTerm={searchTerm}  />
                <Library songs={library} />
              </Sections>
            }
          />
          <Route path="/song/:id" element={<SongDetail onAdd={addToLibrary}/>} />
        </Routes>

    </ThemeProvider>

  );
}


export default App;