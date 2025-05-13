import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  let [input, setInput] = useState("");
  let handleClick = (value) => {
    if (value === "C") {
      handleClear();
    } else if (value === "=") {
      handleEqeual();
    } else {
      setInput((prev) => prev + value);
      // or but best practice above
      // setInput(input+ value);
    }
  };

  let handleClear = () => {
    setInput("");
  };
  let handleEqeual = () => {
    try {
      setInput(eval(input.toString()));
    } catch (error) {
      setInput("Error");
    }
  };
  // let handleClick = (value) => {
  //   setInput((prev) => prev + value);
  // };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        Calculator App
      </h1>
      <div className={styles.calculator}>
        <Display input={input}></Display>
        <ButtonContainer handleClick={handleClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
