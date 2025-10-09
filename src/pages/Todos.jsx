// src/pages/Todos.jsx

import { useState } from 'react';
import AddTodo from '../components/AddTodo';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (newTodo) => {
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <AddTodo onAdd={handleAdd} />

        <div style={styles.todoSections}>
          {/* Not Done section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Not Done</h2>
            <div style={styles.scrollBox}>
              {todos.filter(t => !t.done).length === 0 && (
                <p style={{ textAlign: 'center', opacity: 0.7 }}>No tasks pending 🎉</p>
              )}
              {todos.filter(t => !t.done).map((todo) => (
                <div key={todo.id} style={styles.todoCard}>
                  <h4>{todo.title}</h4>
                  <p>{todo.date} {todo.time && `at ${todo.time}`}</p>
                  <button onClick={() => toggleDone(todo.id)} style={styles.doneButton}>Done</button>
                </div>
              ))}
            </div>
          </div>

          {/* Done section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Done</h2>
            <div style={styles.scrollBox}>
              {todos.filter(t => t.done).length === 0 && (
                <p style={{ textAlign: 'center', opacity: 0.7 }}>Nothing completed yet 😅</p>
              )}
              {todos.filter(t => t.done).map((todo) => (
                <div key={todo.id} style={styles.todoCard}>
                  <h4>{todo.title}</h4>
                  <p>{todo.date} {todo.time && `at ${todo.time}`}</p>
                  <button onClick={() => handleDelete(todo.id)} style={styles.deleteButton}>
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',     // ✅ center horizontally
    alignItems: 'center',          // ✅ center vertically (optional)
    width: '100%',
    minHeight: 'calc(100vh - 48px)', // adjust for navbar height if needed
    backgroundColor: 'transparent', // ✅ no dark blue background
  },
  wrapper: {
    backgroundColor: '#fdfdfdff',
    padding: '40px',
    borderRadius: '16px',
    width: '85%',
    maxWidth: '1000px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
    position: 'relative',
  },
  todoSections: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '80px',
  },
  section: {
    flex: 1,
    backgroundColor: '#b05c1dff',
    borderRadius: '10px',
    padding: '15px',
    minHeight: '400px',
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  scrollBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  todoCard: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  doneButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#38b000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#d00000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Todos;
