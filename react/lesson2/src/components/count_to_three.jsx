import { useState } from 'react';

export default function Plus3Counter() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 3);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>+3</button>
    </div>
  )
}