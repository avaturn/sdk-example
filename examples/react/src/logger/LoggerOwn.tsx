import { useEffect, useRef, useState } from "react";
import { useLogger } from "./context";
import { scrollToBottom } from "../common";
import "./logger.css";

export const LoggerOwn = () => {
  const { logs } = useLogger();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logsEndRef.current) scrollToBottom(logsEndRef.current);
  }, [logs]);

  return (
    <div className={`logger-own${isCollapsed ? " logger--collapsed" : ""}`}>
      <button
        className="logger-own__toggle"
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        {isCollapsed ? "Expand Logger" : "Collapse Logger"}
      </button>
      {!isCollapsed && (
        <ul className="logger2__list">
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
          <div ref={logsEndRef}></div>
        </ul>
      )}
    </div>
  );
};
