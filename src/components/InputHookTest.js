import React from "react";
import useInput from "./useInput";

function InputHookTest() {
  const [name, bindName, resetName] = useInput("");

  const handleSubmit = (event) => {
    alert(`Hello ${name}`);
    event.preventDefault();
    resetName();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input {...bindName} type={"text"}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default InputHookTest;
