"use client";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./../redux/features/counter/counterSlice";

export default function Home() {
  return (
    <main>
      <Counter />
    </main>
  );
}
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
