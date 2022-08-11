# QonoS

Qonos, log in Kilngon, is a basic Typescript based console logger with level, color, trace and timestamp options.

## Install

`npm i @ultra8k/qonos`

`yarn add @ultra8k/qonos`

`pnpm add @ultra8k/qonos`

## Options

| Name       | Type    | Default                                                                                      | Description                                                                                                                                                            |
| ---------- | ------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| level      | Number  | 0                                                                                            | Choose between [0 (debug), 1 (info), 2 (warn), 3 (error)]                                                                                                              |
| colorize   | Boolean | true                                                                                         | If true; use customized console level colors.<br><br>If false; use the default console colors                                                                          |
| colors     | Object  | {<br> debug: "#A5B4FC",<br> info: "#67E8F9",<br> warn: "#FDE047",<br> error: "#FCA5A5",<br>} | Custom level colors                                                                                                                                                    |
| trace      | Boolean | true                                                                                         | Show file name and line number                                                                                                                                         |
| timestamp  | Boolean | true                                                                                         | Show timestamp of log                                                                                                                                                  |
| stampFirst | Boolean | true                                                                                         | true will display log message as<br> [timestamp &#124; trace &#124; message];<br><br>false will display the log message as<br> [trace &#124; timestamp &#124; message] |

## Usage

```javascript
// import and configure QonoS
import { Logger, LogOptions } from "@ultra8k/qonos";
const options: LogOptions = {
  level: 0,
  colorize: true,
  colors: {
    debug: "#A5B4FC",
    info: "#67E8F9",
    warn: "#FDE047",
    error: "#FCA5A5",
  },
  trace: true,
  timestamp: true,
  stampFirst: true,
};
export const logger = new Logger(options);

// use log levels to display messages
logger.debug("log a debug message");
logger.info("log an info message");
logger.warn("log a warn message");
logger.error("log an error message");
```
