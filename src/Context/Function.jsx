import React, { useState, useContext } from "react";
import NameContext from "./Context";

const App = () => {
  const [fontSize, setFontSize] = useState(10);
  const name = useContext(NameContext);

  return (
    <>
      <button onClick={() => setFontSize(fontSize + 3)}>
        Increase hello size
      </button>
      <p style={{ fontSize: `${fontSize}px` }}>Hello, {name}</p>
    </>
  );
};

export default App;
