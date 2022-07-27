import { Logger } from "../src/index";
const logger = new Logger();

describe("Logger", () => {
  it("can call debug", () => {
    expect(logger.debug).toBeTruthy();
    logger.debug("something");
  });
  it("can call info", () => {
    expect(logger.info).toBeTruthy();
    logger.info("something else");
  });
  it("can call warn", () => {
    expect(logger.warn).toBeTruthy();
    logger.warn("this is a warning");
  });
  it("can call error", () => {
    expect(logger.error).toBeTruthy();
    logger.error("this is an error");
  });
});
