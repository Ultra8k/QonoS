import type { Config } from "@jest/types";
import { defaults } from "jest-config";

// Sync object
const config: Config.InitialOptions = {
  ...defaults,
};
export default config;
