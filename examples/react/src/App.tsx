import { useCallback, useState } from "react";
import { LoggerContext } from "./logger";
import { Scene } from "./Scene";

export default function App() {
  const [logs, setLogs] = useState<string[]>([]);
  const log = useCallback((...args: string[]) => {
    setLogs((prevLogs) => [...prevLogs, args.join(" ")]);
  }, []);
  const clearLogs = useCallback((...args: string[]) => {
    setLogs([]);
  }, []);

  return (
    <LoggerContext.Provider value={{ logs, log, clear: clearLogs }}>
      <Scene />
    </LoggerContext.Provider>
  );
}
