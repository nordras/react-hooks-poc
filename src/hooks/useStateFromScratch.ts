import { useReducer } from 'react';
type SetStateAction<T> = T | ((prevState: T) => T);

function stateReducer<T>(state: T, action: SetStateAction<T>): T {
  return typeof action === 'function' 
    ? (action as (prevState: T) => T)(state)
    : action;
}

export function useStateFromScratch<T>(initialState: T): [T, (action: SetStateAction<T>) => void] {
  return useReducer(stateReducer<T>, initialState);
}

export function createSimpleState<T>(initialValue: T) {
  let state = initialValue;
  const listeners: (() => void)[] = [];
  
  const setState = (newValue: T | ((prev: T) => T)) => {
    const nextState = typeof newValue === 'function' 
      ? (newValue as (prev: T) => T)(state)
      : newValue;
    
    if (nextState !== state) {
      state = nextState;
      listeners.forEach(listener => listener());
    }
  };
  
  const getState = () => state;
  
  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  };
  
  return { getState, setState, subscribe };
}