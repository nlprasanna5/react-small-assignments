import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
    subject: ''
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.grade || !formData.subject) {
      setError("Please fill all input fields");
      return;
    }
    console.log(formData)

    setStudents([...students, formData]);

    setFormData({
      name: '',
      age: '',
      grade: '',
      subject: ''
    });
    setError("");
  };

  const handleInputChange = (e) => {
    console.log(formData,'before');
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData,'after');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Student Form</h2>
      <p className={styles.error}>{error}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Grade:</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>

      {students.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>{student.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
