"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface PokemonState {
  value: object;
}

const fetchInitialData = async () => {
  // Perform asynchronous operations, such as fetching data from an API
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();

  return data;
};

const initialState: PokemonState = {
  value: fetchInitialData(),
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export default pokemonSlice.reducer;
