import { NavLink, Route, Routes } from 'react-router-dom';
import UseStateDemo from './pages/UseStateDemo';
import ToggleDemo from './pages/ToggleDemo';
import DebounceDemo from './pages/DebounceDemo';
import AsyncDemo from './pages/AsyncDemo';

const navItems = [
  { to: '/', label: 'useState do Zero' },
  { to: '/toggle', label: 'useToggle' },
  { to: '/debounce', label: 'useDebounce' },
  { to: '/async', label: 'useAsync' },
];

export default function App() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-4 space-y-4 bg-gray-50">
        <div>
          <h1 className="font-bold text-xl mb-1">React Hooks Lab</h1>
          <p className="text-sm text-gray-600">Aprendendo hooks na prática</p>
        </div>
        <nav className="flex flex-col gap-1 text-sm">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded transition-colors ${
                  isActive 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="text-xs text-gray-500 pt-4 border-t">
          <p>🎯 Objetivo: Entender como funcionam os hooks</p>
          <p>🔧 Implementar useState do zero</p>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<UseStateDemo />} />
          <Route path="/toggle" element={<ToggleDemo />} />
          <Route path="/debounce" element={<DebounceDemo />} />
          <Route path="/async" element={<AsyncDemo />} />
        </Routes>
      </main>
    </div>
  );
}
