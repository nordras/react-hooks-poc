import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export default function DebounceDemo() {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 600);
  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-semibold">useDebounce</h2>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Digite para ver o atraso"
        className="px-3 py-1 border rounded w-full"
      />
      <p className="text-sm">Immediate: <code className="font-mono">{value}</code></p>
      <p className="text-sm">Debounced: <code className="font-mono">{debounced}</code></p>
    </div>
  );
}
