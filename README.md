# QonoS

Qonos, which is Kilngon for Log, is a basic Typescript console logger with simple options for level, color, trace and timestamp.

## Install

`npm i @ultra8k/qonos -D`

`yarn add @ultra8k/qonos -D`

`pnpm add @ultra8k/qonos -D`

## Options

| Name       | Type    | Default                                                                                      | Description                                                                                                                                                            |
| ---------- | ------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| level      | String  | "debug"                                                                                      | Determines the minimum level that will execute.<br>Choose between "debug", "info", "warn", "error"                                                                     |
| colorize   | Boolean | true                                                                                         | If true; use customized console level colors.<br><br>If false; use the default console colors                                                                          |
| colors     | Object  | {<br> debug: "#A5B4FC",<br> info: "#67E8F9",<br> warn: "#FDE047",<br> error: "#FCA5A5",<br>} | Custom level colors                                                                                                                                                    |
| trace      | Boolean | true                                                                                         | Show file name and line number                                                                                                                                         |
| timestamp  | Boolean | true                                                                                         | Show timestamp of log                                                                                                                                                  |
| stampFirst | Boolean | true                                                                                         | true will display log message as<br> [timestamp &#124; trace &#124; message];<br><br>false will display the log message as<br> [trace &#124; timestamp &#124; message] |

## Usage

### ES Module

```javascript
import { Logger } from "@ultra8k/qonos";
const options: LogOptions = {
  level: "debug",
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

### UMD Module

```html
<script src="@ultra8k/qonos/dist/qonos.umd.js"></script>
<script>
  const options = {
    level: "debug",
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
  const logger = new qonos.Logger(options);
  logger.debug("this", "works!");
  logger.info("so", "does", "this");
</script>
```
