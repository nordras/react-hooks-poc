import { useAsync } from '../hooks/useAsync';

function mockApi() {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve('Resultado recebido em ' + new Date().toLocaleTimeString()), 1200);
  });
}

export default function AsyncDemo() {
  const { status, data, error, run } = useAsync(mockApi, false);
  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-semibold">useAsync</h2>
      <div className="flex gap-2">
        <button onClick={() => run()} className="px-3 py-1 rounded bg-primary text-primary-foreground">Executar</button>
      </div>
      <p>Status: <code className="font-mono">{status}</code></p>
      {status === 'pending' && <p className="text-sm animate-pulse">Carregando...</p>}
      {status === 'error' && <p className="text-sm text-red-600">Erro: {String(error)}</p>}
      {status === 'success' && <p className="text-sm text-green-600">{data}</p>}
    </div>
  );
}
