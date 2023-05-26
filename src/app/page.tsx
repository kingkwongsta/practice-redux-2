"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./../redux/features/counter/counterSlice";
import { fetchInitialData } from "./../redux/features/pokemon/pokemonSlice";
import TestCounter from "./components/TestCounter";
import TestPokemon from "./components/TestPokemon";

export default function Home() {
  return (
    <main>
      <Counter />
    </main>
  );
}
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const pokemonValue = useSelector((state) => state.pokemon.pokemonData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  function handleClick() {
    console.log(pokemonValue);
  }

  return (
    <div>
      <div>
        <button
          className="m-4"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="m-4"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <TestCounter />
      <button className="m-5" onClick={handleClick}>
        {" "}
        What is in pokemon data?
      </button>
      <TestPokemon />
    </div>
  );
}
