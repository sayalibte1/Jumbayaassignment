import React, { useState, useEffect } from "react";


export default function Logicalpart() {
  const [num, setNum] = useState();
  const [letter, setLetter] = useState();
  const [conversion, setconversion] = useState();
  const numConversion = (e) => {
    setNum(e.target.value);
  };

  const letterConversion = (e) => {
    setLetter(e.target.value);
  };

  const onClickConvert = () => {
    let numSplit = num.split("");
    let letterSplit = letter.split("");
    let length =
      numSplit.length > letterSplit.length
        ? numSplit.length
        : letterSplit.length;
    let sol = "";
    for (let index = 0; index < length; index++) {
      if (numSplit[index] != null && letterSplit[index] != null) {
        sol = sol + numSplit[index] + letterSplit[index];
      } else {
        break;
      }
    }
    setconversion(sol);
  };

  return (
    <div className="App">
      <input type="text" value={num} onChange={numConversion} />

      <input type="text" value={letter} onChange={letterConversion} />
      <button onClick={onClickConvert}>show output</button>
      <h1>{conversion}</h1>
    </div>
  );
}
