import { NavLink } from "react-router-dom"

const linkClass = ({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-md mb-2 text-sm font-bold ${isActive ? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-blue-800'}`

export default function NavBar() {
    return (
        <aside className="w-56 bg-blue-900 text-white min-h-screen">
            <div className="p-4">
                <h1 className="text-lg font-extrabold mb-4">SimplyTrack</h1>
                <nav aria-label="Main navigation" className="flex flex-col">
                    <NavLink to="/todos" className={linkClass}>Todos</NavLink>
                    <NavLink to="/habits" className={linkClass}>Habits</NavLink>
                    <NavLink to="/expenses" className={linkClass}>Expenses</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                </nav>
            </div>
        </aside>
    )
}