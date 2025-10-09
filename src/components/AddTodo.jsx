// src/components/AddTodo.jsx

import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAdd = () => {
    if (!title.trim() || !date) {
      alert('Title and Date are required!');
      return;
    }

    onAdd({
      id: Date.now(),
      title,
      date,
      time,
      done: false,
    });

    // Reset form
    setTitle('');
    setDate('');
    setTime('');
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} style={styles.addButton}>
        Add Todo
      </button>

      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2 style={styles.heading}>Add Todo</h2>

            <div>
              <label style={styles.label}>Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
                placeholder="Enter title"
              />
            </div>

            <div>
              <label style={styles.label}>Date *</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={styles.input}
              />
            </div>

            <div>
              <label style={styles.label}>Time (optional)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.buttonRow}>
              <button onClick={handleAdd} style={styles.modalAddBtn}>Add</button>
              <button onClick={() => setShowModal(false)} style={styles.modalCancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  addButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#00b4d8',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    width: '350px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  heading: {
    marginBottom: '10px',
    textAlign: 'center',
    color: '#003049'
  },
  label: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginBottom: '5px',
    display: 'block',
    color: '#333'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outlineColor: '#00b4d8',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    color: '#000', // 🔧 makes input text visible
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  modalAddBtn: {
    padding: '10px 20px',
    backgroundColor: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  modalCancelBtn: {
    padding: '10px 20px',
    backgroundColor: '#aaa',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'white',
  },
};

export default AddTodo;
