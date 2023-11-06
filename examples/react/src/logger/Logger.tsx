import { useEffect, useRef } from "react";
import { useLogger } from "./context";
import { scrollToBottom } from "../common";
import "./logger.css";

export const Logger = () => {
  const { logs } = useLogger();
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logsEndRef.current) scrollToBottom(logsEndRef.current);
  }, [logs]);
  return (
    <div className="logger">
      <ul className="logger__list">
        {logs.map((log, index) => (
          <li key={index}>
            <pre>{log}</pre>
          </li>
        ))}
        <div ref={logsEndRef}></div>
      </ul>
    </div>
  );
};
