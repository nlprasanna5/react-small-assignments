import React, { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1Change} className={styles.inputField} />
      <input type="number" value={num2} onChange={handleNum2Change} className={styles.inputField} />
      <br />
      <button onClick={handleAddition} className={styles.button}>Addition</button>
      <button onClick={handleSubtraction} className={styles.button}>Subtraction</button>
      <button onClick={handleMultiplication} className={styles.button}>Multiplication</button>
      <button onClick={handleDivision} className={styles.button}>Division</button>
      <br />
      <h2 className={styles.result}>Result: {result}</h2>
    </div>
  );
};

export default App;
