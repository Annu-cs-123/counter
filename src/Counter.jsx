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
      <p>
        {counter}
      </p>
      <button onClick={SETCounterValue}>add value +</button>
      {/* <button onClick={() => setCounter((counter) => counter - 1)}>Remove value -</button> */}
      <button onClick={setRemoveValue}>Remove value -</button>
    </div >
  )

}