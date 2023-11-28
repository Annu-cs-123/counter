import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(1);

  function SETCounterValue() {
    setCounter(counter + 1)
  }

  function setRemoveValue() {
    // if (counter === 0) {
    //   setCounter(counter - 0);
    // } else {
    //   setCounter(counter - 1)
    // }
    counter === 0 ? setCounter(counter - 0) : setCounter(counter - 1)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <p className="text-3xl font-bold  text-center my-2 py-2">
        {counter}
      </p>
      <button onClick={SETCounterValue} className="outline-none px-4 py-3 mx-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "Green" }}> add value +</button>
      {/* <button onClick={() => setCounter((counter) => counter - 1)}>Remove value -</button> */}
      <button onClick={setRemoveValue} className="outline-none px-4 mx-1 py-3 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "red" }}>Remove value -</button>
    </div >
  )

}