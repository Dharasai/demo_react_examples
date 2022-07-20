import { useState } from "react";

function UseInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: inputHandler,
  };
}

export default UseInput;
