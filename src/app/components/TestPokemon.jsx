import { useSelector } from "react-redux";

export default function TestPokemon() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h2>This is the count {count}</h2>
    </div>
  );
}
