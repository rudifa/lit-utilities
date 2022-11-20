/** @prettier */
/**
 * Copyright © 2022 Rudolf Farkas
 * License MIT
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './info-links';
import './dropdown-menu';
import './input-hello';
import './input-demo';

/**
 * Demo app for lit-utilities elements
 */
@customElement('app-root')
export class AppRoot extends LitElement {
  static get styles() {
    return css``;
  }

  render() {
    return html`
      <info-links></info-links>
      <dropdown-menu></dropdown-menu>
      <input-hello></input-hello>
      <input-demo></input-demo>
    `;
  }
}
