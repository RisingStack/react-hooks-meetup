import React, { useState, useMemo, useCallback } from "react";

const words = ["hey", "this", "is", "cool"];

function App() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const word = words[wordIndex];

  const computeLetterCount = useCallback(word => {
    let i = 0;
    while (i < 1000000000) i++; // Fake expense
    return word.length;
  }, []);

  const letterCount = useMemo(() => {
    console.log("Calculate letter count...");
    return computeLetterCount(word);
  }, [word, computeLetterCount]);

  return (
    <>
      <h2>Compute number of letters</h2>
      <p>
        "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const nextWordIndex =
            wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(nextWordIndex);
        }}
      >
        Next word
      </button>
      <h2>Increment a counter</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
