import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

import { InfoLinks } from "./info-links";

/**
 * Demo app for lit-utilities elements
 */
@customElement("app-root")
export class AppRoot extends LitElement {
  static get styles() {
    return css``;
  }

  render() {
    return html` <info-links></info-links> `;
  }
}
