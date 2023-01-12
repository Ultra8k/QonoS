export type LogLevels = "debug" | "info" | "warn" | "error";
export type LogOptions = {
  level?: LogLevels;
  colorize?: boolean;
  colors?: {
    [key in LogLevels]?: string;
  };
  trace?: boolean;
  timestamp?: boolean;
  stampFirst?: boolean;
};
export interface ILogOptions {
  colorize: boolean;
  colors: {
    [key in LogLevels]: string;
  };
  level: number;
  stampFirst: boolean;
  timestamp: boolean;
  trace: boolean;
}
export interface ILogger {
  debug(...msg: unknown[]): void;
  error(...msg: unknown[]): void;
  info(...msg: unknown[]): void;
  warn(...msg: unknown[]): void;
}

export declare class Logger implements ILogger {
  private _options;
  public constructor(options?: LogOptions);
  public debug(...msg: unknown[]): void;
  public error(...msg: unknown[]): void;
  public info(...msg: unknown[]): void;
  public warn(...msg: unknown[]): void;
  private _getStacktrace;
  private _log;
  private _logLevel;
  private _timestamp;
}
