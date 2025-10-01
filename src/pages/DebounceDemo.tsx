import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export default function DebounceDemo() {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 600);
  
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-semibold mb-2">useDebounce</h2>
        <p className="text-sm text-gray-600 mb-4">
          Hook para atrasar a execução de uma função até que pare de ser chamada
        </p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-medium mb-3">Demonstração</h3>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Digite para ver o atraso de 600ms..."
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <div className="space-y-2">
          <p className="text-sm">
            <strong>Valor imediato:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{value || '(vazio)'}</code>
          </p>
          <p className="text-sm">
            <strong>Valor com debounce:</strong> <code className="bg-blue-100 px-2 py-1 rounded">{debounced || '(vazio)'}</code>
          </p>
        </div>
      </div>

      <div className="border p-4 rounded bg-gray-50">
        <h3 className="font-medium mb-2">Implementação</h3>
        <pre className="text-xs overflow-auto">
{`function useDebounce<T>(value: T, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  
  return debounced;
}`}
        </pre>
      </div>

      <div className="border p-4 rounded bg-green-50">
        <h3 className="font-medium mb-2">Quando usar?</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>Busca em tempo real (evitar muitas requisições)</li>
          <li>Validação de formulários</li>
          <li>Auto-save de documentos</li>
          <li>Resize de janela</li>
          <li>Scroll infinito</li>
        </ul>
      </div>
    </div>
  );
}
