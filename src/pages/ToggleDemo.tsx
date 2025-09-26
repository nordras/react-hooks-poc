import { useToggle } from '../hooks/useToggle';

export default function ToggleDemo() {
  const { value, toggle, setOn, setOff } = useToggle();
  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-semibold">useToggle</h2>
      <p>Initial state: <span className="font-mono">{value.toString()}</span></p>
      <div className="flex gap-2 flex-wrap">
        <button onClick={toggle} className="px-3 py-1 rounded bg-primary text-primary-foreground">toggle()</button>
        <button onClick={setOn} className="px-3 py-1 rounded border">setOn()</button>
        <button onClick={setOff} className="px-3 py-1 rounded border">setOff()</button>
      </div>
      <pre className="text-xs bg-muted p-3 rounded overflow-auto"><code>{`function useToggle(initial = false) {\n  const [value, setValue] = useState(initial)\n  const toggle = () => setValue(v => !v)\n  ...\n}`}</code></pre>
    </div>
  );
}
