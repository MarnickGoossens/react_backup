import { useState } from "react";

function Number({ display }) {
  var textStyle = {
    fontSize: 72,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold"
  };

  return (
    <div style={textStyle}>
      {display}
    </div>
  );
}

function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0)

  const backgroundStyle = {
    padding: 50,
    backgroundColor: "#FFC53A",
    width: 250,
    height: 130,
    borderRadius: 10,
    textAlign: "center"
  };

  function Button({ operation, onClick }) {
    return (
      <button onClick={(event) => onClick(event, operation) }>{operation}</button>
    )
  }
  
  function handleClick(event, operation) {
    // count = count + 1;

    if (operation === "+") {
      if (event.shiftKey) {
        setCount(count + 10);
      }
      else {
        setCount(count + 1);
      }
    } else {
      if (event.shiftKey) {
        setCount(count - 10);
      }
      else {
        setCount(count - 1);
      }
    }
  }

  return (
    <div style={backgroundStyle}>
      <Number display={count}/>
      <Button operation="+" onClick={handleClick} />
      <Button operation="-" onClick={handleClick} />
    </div>
  );
}

export default Counter;