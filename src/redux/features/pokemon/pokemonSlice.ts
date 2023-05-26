"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface PokemonState {
  value: object | null;
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
  value: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      state.value = action.payload; // Update the state with the fetched data
    });
  },
});

export default pokemonSlice.reducer;
