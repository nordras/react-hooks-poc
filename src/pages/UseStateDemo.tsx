import { useStateFromScratch } from '../hooks/useStateFromScratch';

export default function UseStateDemo() {
  const [count, setCount] = useStateFromScratch(0);
  const [text, setText] = useStateFromScratch('');
  const [isVisible, setIsVisible] = useStateFromScratch(true);

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-semibold mb-2">useState do Zero</h2>
        <p className="text-sm text-gray-600 mb-4">
          Implementação personalizada do useState usando useReducer
        </p>
      </div>
      <div className="border p-4 rounded">
        <h3 className="font-medium mb-2">Contador</h3>
        <p className="mb-3">Valor: <span className="font-mono text-lg">{count}</span></p>
        <div className="space-x-2">
          <button 
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            +1
          </button>
          <button 
            onClick={() => setCount(prev => prev - 1)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -1
          </button>
          <button 
            onClick={() => setCount(0)}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="border p-4 rounded">
        <h3 className="font-medium mb-2">Campo de Texto</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite algo..."
          className="w-full p-2 border rounded mb-2"
        />
        <p className="text-sm">Você digitou: <span className="font-mono">{text}</span></p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-medium mb-2">Toggle de Visibilidade</h3>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 mb-3"
        >
          {isVisible ? 'Esconder' : 'Mostrar'} Conteúdo
        </button>
        {isVisible && (
          <div className="p-3 bg-purple-50 rounded">
            <p>🎉 Este conteúdo está visível!</p>
          </div>
        )}
      </div>
      <div className="border p-4 rounded bg-gray-50">
        <h3 className="font-medium mb-2">Como funciona</h3>
        <pre className="text-xs overflow-auto">
{`// Implementação usando useReducer
function useStateFromScratch<T>(initialState: T) {
  return useReducer(stateReducer<T>, initialState);
}

function stateReducer<T>(state: T, action: SetStateAction<T>): T {
  return typeof action === 'function' 
    ? action(state)
    : action;
}`}
        </pre>
      </div>
    </div>
  );
}