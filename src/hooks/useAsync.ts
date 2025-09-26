import { useCallback, useEffect, useRef, useState } from 'react';

interface State<T> {
  data?: T;
  error?: unknown;
  status: 'idle' | 'pending' | 'success' | 'error';
}

export function useAsync<T>(asyncFn: () => Promise<T>, immediate = true) {
  const [state, setState] = useState<State<T>>({ status: 'idle' });
  const mounted = useRef(true);
  useEffect(() => () => { mounted.current = false; }, []);

  const run = useCallback(async () => {
    setState({ status: 'pending' });
    try {
      const data = await asyncFn();
      if (!mounted.current) return; 
      setState({ status: 'success', data });
      return data;
    } catch (error) {
      if (!mounted.current) return; 
      setState({ status: 'error', error });
      throw error;
    }
  }, [asyncFn]);

  useEffect(() => { if (immediate) run(); }, [immediate, run]);
  return { ...state, run } as const;
}
