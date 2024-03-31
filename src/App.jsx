import { useState } from "react";
import "./App.css";

export default function App() {
  const [code, setCode] = useState("#2febba");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexCode() {
    const Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += Array[randomColor(Array.length)];
    }
    setCode(hexColor);
  }

  function handleRgbCode() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    let hexColor = `rgb( ${r},${g},${b})`;

    setCode(hexColor);
  }
  return (
    <div id="main" style={{ backgroundColor: code }}>
      <Container
        code={code}
        onBtnHex={handleHexCode}
        onBtnRgb={handleRgbCode}
      />
    </div>
  );
}

function Container({ code, onBtnHex, onBtnRgb }) {
  return (
    <div id="container">
      <h2>{code}</h2>
      <div>
        <button id="btn" onClick={onBtnHex} style={{ backgroundColor: code }}>
          Hex code
        </button>
        <button id="btn" onClick={onBtnRgb} style={{ backgroundColor: code }}>
          RGB code
        </button>
      </div>
    </div>
  );
}
