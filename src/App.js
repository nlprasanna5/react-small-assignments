import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [value, setValue] = useState("");
  const [table, setTable] = useState([]);

  function handleInput(e) {
    const inputValue = Number(e.target.value);
    if(isNaN(inputValue)){
      alert("Please enter number")
      return;
    }
    setValue(inputValue);

    const updatedTable = [];
    for (let i = 1; i <= 10; i++) {
      let result = inputValue * i;
      updatedTable.push({ number: inputValue, result });
    }
    setTable(updatedTable);
  }

  return (
    <div className={styles.container}>
      <h2>Table</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="text"
          placeholder="Enter any value"
          onChange={handleInput}
        />
      </div>

      <div className={styles.tableContainer}>
        <table>
          { table.length>0 && 
            <>
            <thead>
            <tr>
              <th>Number</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr key={index}>
                <td>{`${item.number} * ${index + 1}`}</td>
                <td>{item.result}</td>
              </tr>

            ))}

          </tbody>
          </>
          }
        </table>
      </div>
    </div>
  );
};

export default App;
