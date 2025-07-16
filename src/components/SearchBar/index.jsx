
import { useDispatch } from "react-redux";

import { fetchSongs } from "../../redux/slices/searchSlice"
import { Form, Input, Button } from "./style";
import { useState } from "react";


function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(fetchSongs(input));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Busca un artista..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
}

export default SearchBar;