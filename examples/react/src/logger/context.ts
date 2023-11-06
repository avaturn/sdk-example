import { createContext, useContext } from "react";

export interface ILogger {
  logs: string[];
  log: (message: string) => void;
  clear: () => void;
}

export const LoggerContext = createContext<ILogger>({
  logs: [],
  log: () => {
    return;
  },
  clear: () => {
    return;
  },
});

export const useLogger = () => useContext(LoggerContext);
