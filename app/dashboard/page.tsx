"use client"; // Required for hooks

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement, reset } from "@/redux/slices/counterSlice";

export default function Dashboard() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Counter: {count}</p>

      <div className="space-x-4 mt-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
