import React, { useState, useEffect } from "react";

const App = ({ name }) => {
  const [fontSize, setFontSize] = useState(10);

  useEffect(() => {
    console.log(`Font size: ${fontSize}`);
  }, [fontSize]);

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
