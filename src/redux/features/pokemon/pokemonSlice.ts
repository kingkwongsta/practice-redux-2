import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface PokemonState {
  pokemonData: object | null;
  loading: boolean;
  error: string;
  status: "idle" | "loading" | "succeeded" | "failed"; // Add a status field to track the state of the async operation
}

export const fetchInitialData = createAsyncThunk(
  "pokemon/fetchInitialData",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    return data;
  }
);

const initialState: PokemonState = {
  pokemonData: null,
  loading: false,
  status: "idle", // Set initial status to "idle"
  error: "",
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.status = "loading"; // Update status to "loading" while the fetch is in progress
        state.loading = true;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.status = "succeeded"; // Update status to "succeeded" when the fetch is successful
        state.pokemonData = action.payload; // Update the state with the fetched data
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.status = "failed"; // Update status to "failed" if the fetch fails
        state.pokemonData = {};
        state.error = action.error.message ?? "Unknown error occurred";
      });
  },
});

export default pokemonSlice.reducer;
