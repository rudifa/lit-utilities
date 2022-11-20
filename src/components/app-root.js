/** @prettier */
/**
 * Copyright © 2022 Rudolf Farkas
 * License MIT
 */

import {LitElement, html, css} from 'lit';
import {property, customElement} from 'lit/decorators.js';

import {InfoLinks} from './info-links';
import {DropdownMenu} from './dropdown-menu';
import {InputHello} from './input-hello';
import {InputDemo} from './input-demo';

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
