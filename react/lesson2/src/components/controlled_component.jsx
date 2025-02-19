import { useState } from "react";

function ControlledComponent(){
  const [firstname, setFirstname] = useState('');

  const inputStyle = {
    padding: 10,
    borderRadius: 10,
    border: 'none',
    boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)'
  };

  function handleChange(event) {
    setFirstname(event.target.value)
  }

  return (
    <div>
      <input style={inputStyle}
        onChange={handleChange}
        value={firstname}
        />
      <div>Hello {firstname}</div>
    </div>
  );
}

export default ControlledComponent;