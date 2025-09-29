import { NavLink, Route, Routes } from 'react-router-dom';
import ToggleDemo from './pages/ToggleDemo';
import LocalStorageDemo from './pages/LocalStorageDemo';
import DebounceDemo from './pages/DebounceDemo';
import IntervalDemo from './pages/IntervalDemo';
import PreviousDemo from './pages/PreviousDemo';
import AsyncDemo from './pages/AsyncDemo';
import EventListenerDemo from './pages/EventListenerDemo';
import Dashboard from './pages/Dashboard';

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/', label: 'useToggle' },
  { to: '/local-storage', label: 'useLocalStorage' },
  { to: '/debounce', label: 'useDebounce' },
  { to: '/interval', label: 'useInterval' },
  { to: '/previous', label: 'usePrevious' },
  { to: '/async', label: 'useAsync' },
  { to: '/event-listener', label: 'useEventListener' },
];

export default function App() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-56 border-r p-4 space-y-2 bg-secondary/30">
        <h1 className="font-bold text-lg mb-2">React Hooks Lab</h1>
        <nav className="flex flex-col gap-1 text-sm">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground ${isActive ? 'bg-primary text-primary-foreground' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="text-xs text-muted-foreground pt-4 border-t mt-4">
          Futuro: substituir componentes por shadcn/ui
        </div>
      </aside>
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<ToggleDemo />} />
          <Route path="/local-storage" element={<LocalStorageDemo />} />
          <Route path="/debounce" element={<DebounceDemo />} />
          <Route path="/interval" element={<IntervalDemo />} />
          <Route path="/previous" element={<PreviousDemo />} />
          <Route path="/async" element={<AsyncDemo />} />
          <Route path="/event-listener" element={<EventListenerDemo />} />
        </Routes>
      </main>
    </div>
  );
}
