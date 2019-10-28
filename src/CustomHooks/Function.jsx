import React, { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

const App = ({ name }) => {
  const [fontSize, setFontSize] = useState(10);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setFontSize(windowWidth / 10);
  }, [windowWidth]);

  return (
  <p style={{ fontSize: `${fontSize}px` }}>
    Hello, {name}
  </p>
  );
};

export default App;
