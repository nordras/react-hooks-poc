import { useToggle } from '../hooks/useToggle';

export default function ToggleDemo() {
  const { value, toggle, setOn, setOff } = useToggle();
  
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-semibold mb-2">useToggle</h2>
        <p className="text-sm text-gray-600 mb-4">
          Hook customizado para gerenciar estados booleanos com facilidade
        </p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-medium mb-3">Demonstração</h3>
        <p className="mb-4">
          Estado atual: <span className="font-mono text-lg font-bold text-blue-600">{value.toString()}</span>
        </p>
        <div className="flex gap-3 flex-wrap">
          <button 
            onClick={toggle} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            toggle()
          </button>
          <button 
            onClick={setOn} 
            className="px-4 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50"
          >
            setOn()
          </button>
          <button 
            onClick={setOff} 
            className="px-4 py-2 border border-red-500 text-red-600 rounded hover:bg-red-50"
          >
            setOff()
          </button>
        </div>
      </div>

      <div className="border p-4 rounded bg-gray-50">
        <h3 className="font-medium mb-2">Implementação</h3>
        <pre className="text-xs overflow-auto">
{`function useToggle(initial = false) {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setOn = useCallback(() => setValue(true), []);
  const setOff = useCallback(() => setValue(false), []);
  return { value, toggle, setOn, setOff };
}`}
        </pre>
      </div>
    </div>
  );
}
