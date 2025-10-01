import { useAsync } from '../hooks/useAsync';

function mockApi() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      // Simula 20% de chance de erro
      if (Math.random() < 0.2) {
        reject(new Error('Erro simulado da API'));
      } else {
        resolve('✅ Dados carregados em ' + new Date().toLocaleTimeString());
      }
    }, 1500);
  });
}

export default function AsyncDemo() {
  const { status, data, error, run } = useAsync(mockApi, false);
  
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-semibold mb-2">useAsync</h2>
        <p className="text-sm text-gray-600 mb-4">
          Hook para gerenciar operações assíncronas com estados de loading, sucesso e erro
        </p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-medium mb-3">Demonstração</h3>
        <button 
          onClick={() => run()} 
          disabled={status === 'pending'}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
        >
          {status === 'pending' ? 'Carregando...' : 'Executar API'}
        </button>
        
        <div className="space-y-2">
          <p>
            <strong>Status:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{status}</code>
          </p>
          
          {status === 'pending' && (
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span className="text-sm">Aguardando resposta da API...</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <p className="text-red-700 text-sm">
                <strong>Erro:</strong> {error instanceof Error ? error.message : String(error)}
              </p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-green-700 text-sm">
                <strong>Sucesso:</strong> {data}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="border p-4 rounded bg-gray-50">
        <h3 className="font-medium mb-2">Implementação</h3>
        <pre className="text-xs overflow-auto">
{`function useAsync<T>(asyncFn: () => Promise<T>, immediate = true) {
  const [state, setState] = useState<State<T>>({ status: 'idle' });
  const mounted = useRef(true);
  
  const run = useCallback(async () => {
    setState({ status: 'pending' });
    try {
      const data = await asyncFn();
      if (!mounted.current) return; 
      setState({ status: 'success', data });
    } catch (error) {
      if (!mounted.current) return; 
      setState({ status: 'error', error });
    }
  }, [asyncFn]);

  return { ...state, run };
}`}
        </pre>
      </div>

      <div className="border p-4 rounded bg-purple-50">
        <h3 className="font-medium mb-2">Quando usar?</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>Chamadas para APIs</li>
          <li>Carregamento de dados</li>
          <li>Upload de arquivos</li>
          <li>Operações que podem falhar</li>
          <li>Qualquer Promise com estados</li>
        </ul>
      </div>
    </div>
  );
}
