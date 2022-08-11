/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "./style.css";
import typescriptLogo from "./typescript.svg";
import { html, render } from "lit-html";
import { logger } from "./logger";

const counter = () => {
  let count = 0;
  const increment = () => {
    count++;
    logger.debug(count);
    logger.info(count);
    logger.warn(count);
    logger.error(count);
  };
  return html`
    <button id="counter" type="button" @click="${increment}">
      Count is ${count}
    </button>
  `;
};

const welcome = html`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">${counter()}</div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

render(welcome, document.querySelector<HTMLDivElement>("#app")!);

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
