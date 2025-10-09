import { useState, useEffect, useMemo } from "react";
import PieChart from "../components/PieChart";

export default function Expenses() {
  const [expenses, setExpenses] = useState(() => {
    try {
      const raw = localStorage.getItem("simplytrack_expenses");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ description: "", amount: "", date: "", category: "" });

  useEffect(() => {
    try {
      localStorage.setItem("simplytrack_expenses", JSON.stringify(expenses));
    } catch (e) {
      // ignore storage errors
    }
  }, [expenses]);

  // close modal on Escape and prevent background scroll while modal is open
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setShowForm(false);
    }
    if (showForm) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [showForm]);

  function resetForm() {
    setForm({ description: "", amount: "", date: "", category: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!form.description.trim() || !form.amount) return;
    const amount = Number(form.amount);
    if (Number.isNaN(amount)) return;
    const newExpense = {
      id: Date.now(),
      description: form.description.trim(),
      amount: Math.round(amount * 100) / 100,
      date: form.date || new Date().toISOString().slice(0, 10),
      category: form.category || "Other",
    };
    setExpenses((s) => [newExpense, ...s]);
    resetForm();
    setShowForm(false);
  }

  function handleDelete(id) {
    setExpenses((s) => s.filter((x) => x.id !== id));
  }

  const categoryData = useMemo(() => {
    const map = new Map();
    for (const e of expenses) {
      const k = e.category || 'Other';
      map.set(k, (map.get(k) || 0) + Number(e.amount || 0));
    }
    return Array.from(map.entries()).map(([label, value]) => ({ label, value }));
  }, [expenses]);

  return (
    <section className="w-full">
      <div className="flex min-w-full justify-between items-center">
        <h2 className="text-2xl font-extrabold mb-4">Expenses</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowForm((v) => !v)}
            className="bg-blue-600 px-3 text-white font-bold py-1 rounded-2xl hover:cursor-pointer"
          >
            {showForm ? "Cancel" : "+ Add Expense"}
          </button>
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          onClick={() => { resetForm(); setShowForm(false); }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative bg-white p-6 rounded shadow w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleAdd} className="grid grid-cols-1 gap-3">
              <h3 className="text-lg font-semibold">Add Expense</h3>
              <label className="flex flex-col text-sm">
                <span className="text-slate-700">Description</span>
                <input name="description" value={form.description} onChange={handleChange} className="mt-1 p-2 border rounded" />
              </label>

              <label className="flex flex-col text-sm">
                <span className="text-slate-700">Amount (Rs.)</span>
                <input name="amount" value={form.amount} onChange={handleChange} type="number" step="0.01" className="mt-1 p-2 border rounded" />
              </label>

              <div className="flex gap-3">
                <label className="flex-1 flex flex-col text-sm">
                  <span className="text-slate-700">Date</span>
                  <input name="date" value={form.date} onChange={handleChange} type="date" className="mt-1 p-2 border rounded" />
                </label>
                <label className="flex-1 flex flex-col text-sm">
                  <span className="text-slate-700">Category</span>
                  <input name="category" value={form.category} onChange={handleChange} className="mt-1 p-2 border rounded" placeholder="Food, Transport..." />
                </label>
              </div>

              <div className="flex gap-2 justify-end">
                <button type="button" onClick={() => { resetForm(); setShowForm(false); }} className="bg-gray-200 px-3 py-1 rounded">Cancel</button>
                <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {expenses.length === 0 ? (
            <p className="text-slate-600">No expenses yet. Click "Add Expense" to create one.</p>
          ) : (
            <ul className="space-y-3">
              {expenses.map((exp) => (
                <li key={exp.id} className="bg-white p-3 rounded shadow flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{exp.description}</div>
                    <div className="text-sm text-slate-600">{exp.category} • {exp.date}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-bold">Rs. {(exp.amount).toFixed(2)}</div>
                    <button onClick={() => handleDelete(exp.id)} className="text-white text-sm bg-red-500 p-1 px-2 rounded-xl hover:cursor-pointer">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {categoryData.length > 0 && (
          <aside className="w-full md:w-80 flex-shrink-0 bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-3">Report</h3>
            <PieChart data={categoryData} size={200} />
          </aside>
        )}
      </div>
    </section>
  );
}
