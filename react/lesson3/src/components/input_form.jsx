import { useState } from "react";

function InputForm({ handleInsert }) {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault(); // don't submit the form
    if (text.trim()) { // Check if the input is not empty
      handleInsert(text); // Call the onInsert function with the text
      setText(''); // Clear the input field
    }
  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="enter task" />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default InputForm;
