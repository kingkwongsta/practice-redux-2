"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./../redux/features/counter/counterSlice";
import TestCounter from "./components/TestCounter";

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
    </div>
  );
}
