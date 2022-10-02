import { Logger } from "../src/index";
jest.mock("../src/index");

describe("Logger", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("can call debug", () => {
    expect(Logger).not.toHaveBeenCalled();

    const logger = new Logger();
    expect(Logger).toHaveBeenCalledTimes(1);
    expect(logger.debug).toBeTruthy();
    logger.debug("something");
    expect(logger.debug).toHaveBeenCalledTimes(1);
  });
  it("can call info", () => {
    expect(Logger).not.toHaveBeenCalled();

    const logger = new Logger();
    expect(Logger).toHaveBeenCalledTimes(1);
    expect(logger.info).toBeTruthy();
    logger.info("something else");
    expect(logger.info).toHaveBeenCalledTimes(1);
  });
  it("can call warn", () => {
    expect(Logger).not.toHaveBeenCalled();

    const logger = new Logger();
    expect(Logger).toHaveBeenCalledTimes(1);
    expect(logger.warn).toBeTruthy();
    logger.warn("this is a warning");
    expect(logger.warn).toHaveBeenCalledTimes(1);
  });
  it("can call error", () => {
    expect(Logger).not.toHaveBeenCalled();

    const logger = new Logger();
    expect(Logger).toHaveBeenCalledTimes(1);
    expect(logger.error).toBeTruthy();
    logger.error("this is an error");
    expect(logger.error).toHaveBeenCalledTimes(1);
  });

  it("can except multiple args", () => {
    const logger = new Logger();
    expect(logger.debug("arg 1", "arg 2")).toBeTruthy();
  });
});
