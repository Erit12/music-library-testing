import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSongs = createAsyncThunk(
  "search/fetchSongs",
  async (artist, thunkAPI) => {
    const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`);
    //console.log(response);
    if (!response.data) throw new Error("No se pudieron obtener los resultados");
    const data = response.data.album;
    return data || [];
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    loading: false,
    error: null
  },
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;