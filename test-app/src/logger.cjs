/* eslint-disable @typescript-eslint/no-var-requires */
const qonos = require("@ultra8k/qonos/dist/qonos");

const logger = new qonos.Logger();

logger.debug("this", "also", "works!");
