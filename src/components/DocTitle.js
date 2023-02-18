import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitle() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
    </>
  );
}

export default DocTitle;
