import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./NavBar"
import Todos from "./pages/Todos"
import Habits from "./pages/Habits"
import Expenses from "./pages/Expenses"
import About from "./pages/About"

export default function App(){
  return(
    <div className="min-h-screen bg-slate-50 flex">
      <NavBar />
      <main className="p-6 flex-1 max-w-4xl">
        <Routes>
          <Route path="/todos" element={<Todos/>} />
          <Route path="/habits" element={<Habits/>} />
          <Route path="/expenses" element={<Expenses/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Navigate to="/todos" replace/>} />
        </Routes>
      </main>
    </div>
  )
}