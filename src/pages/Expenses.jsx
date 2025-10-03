import { useState, useEffect } from "react";
import axios from "axios";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        setExpenses(response.data.todos);
      } catch (err) {
        setError("Failed to fetch the data...");
      }
    }
    fetchExpenses();
  }, []);

  if (error) {
    return <h1 className="text-red-600 text-xl font-bold">{error}</h1>;
  }

  return (
    <section>
      <h2 className="text-2xl font-extrabold mb-4">Expenses</h2>
      <p className="text-slate-700">This is the Expenses page. Track expenses here.</p>
      <p className="text-slate-700">Development Phase Notes : </p>
      <p className="text-slate-700">- tried to render a dummy api to see if the rendering is working, will be changed when we build actual API </p>
      <p className="text-slate-700">- fetch the data from the backend and render it</p>
      <p className="text-slate-700">- put a Add expense button</p>
      <p className="text-slate-700">- put a pie chart</p>
      <p className="text-slate-700">- create a form to add expenses and post them to backend</p>
      <p className="text-slate-700">- store the data in the backend</p>

      
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id} className="bg-red-400 my-1 p-2 rounded-l">{exp.todo}</li>
        ))}
      </ul>
    </section>
  );
}
