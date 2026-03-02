// App.tsx
import React, { useEffect, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import woData from "hanzi-writer-data/我.json";

const App: React.FC = () => {
  const writerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (writerRef.current) {
      const writer = HanziWriter.create(writerRef.current, "我", {
        width: 200,
        height: 200,
        charDataLoader: (char) => woData,
        showOutline: true,
        showCharacter: true,
      });

      // Example: animate stroke
      writer.animateCharacter();
    }
  }, []);

  return (
    <div>
      <h1>Hanzi Writer Demo</h1>
      <div ref={writerRef}></div>
    </div>
  );
};

export default App;