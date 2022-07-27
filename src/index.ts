/* eslint-disable @typescript-eslint/no-explicit-any */
export type LogLevels = "debug" | "info" | "warn" | "error";
export type LogOptions = {
  level?: LogLevels;
  colorize?: boolean;
  colors?: {
    [key in LogLevels]?: string;
  };
  trace?: boolean;
  timestamp?: boolean;
};
interface ILogOptions {
  colorize: boolean;
  colors: {
    [key in LogLevels]: string;
  };
  level: number;
  timestamp: boolean;
  trace: boolean;
}

interface ILogger {
  debug(msg: any): void;
  error(msg: any): void;
  info(msg: any): void;
  warn(msg: any): void;
}

export class Logger implements ILogger {
  private _options: ILogOptions = {
    level: 0,
    colorize: true,
    colors: {
      debug: "#67E8F9",
      info: "#93C5FD",
      warn: "#FDE047",
      error: "#FCA5A5",
    },
    trace: true,
    timestamp: true,
  };

  public constructor(options?: LogOptions) {
    if (options) {
      if (options.level) this._options.level = this.logLevel(options.level);
      if (options.colorize !== undefined)
        this._options.colorize = options.colorize;
      if (options.colors) {
        if (options.colors.debug)
          this._options.colors.debug = options.colors.debug;
        if (options.colors.info)
          this._options.colors.info = options.colors.info;
        if (options.colors.warn)
          this._options.colors.warn = options.colors.warn;
        if (options.colors.error)
          this._options.colors.error = options.colors.error;
      }
      if (options.trace !== undefined) this._options.trace = options.trace;
      if (options.timestamp !== undefined)
        this._options.timestamp = options.timestamp;
    }
  }

  public debug(msg: any): void {
    this._log("debug", msg);
  }

  public error(msg: any): void {
    this._log("error", msg);
  }

  public info(msg: any): void {
    this._log("info", msg);
  }

  public warn(msg: any): void {
    this._log("warn", msg);
  }

  private _log(lvl: LogLevels, msg: any): void {
    const showTraceStamp = this._options.trace || this._options.timestamp;
    const trace = this._options.trace ? `${this.getStacktrace()} ` : "";
    const stamp = this._options.timestamp ? `${this.timestamp()} |` : "";
    const color = `color: ${this._options.colors[lvl]}`;
    const traceStamp = `${trace}${stamp}`;

    if (this.logLevel(lvl) >= this._options.level) {
      if (!showTraceStamp) {
        console[lvl](msg);
      }
      if (showTraceStamp) {
        if (this._options.colorize) console[lvl](`%c${traceStamp}`, color, msg);
        else console[lvl](traceStamp, msg);
      }
    }
  }

  private getStacktrace(): string {
    let stack;
    try {
      throw new Error("");
    } catch (error) {
      stack = (error as Error).stack || "";
    }
    stack = stack.split("\n").map((trace) => {
      const _trace = trace.split("@");
      const _path = _trace[_trace.length - 1].split("/");
      const _file = _path[_path.length - 1].split("?");
      const _line = _file[_file.length - 1].split(":");

      return `${_file[0]}:${_line.pop()} | ${_trace[0]} |`;
    });
    return stack[3];
  }

  private logLevel(level: LogLevels): number {
    const lvls = ["debug", "info", "warn", "error"];
    return lvls.findIndex((lvl) => lvl === level);
  }

  private timestamp() {
    return new Date().toLocaleTimeString();
  }
}
