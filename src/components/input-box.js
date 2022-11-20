/** @prettier */

import {LitElement, html, css} from 'lit';
import {property, customElement} from 'lit/decorators.js';

@customElement('input-box')
export class InputBox extends LitElement {
  static get styles() {
    return css`
      div.inputbox input {
        font-size: 18pt;
        font-family: Helvetica, sans-serif;
        border: 2px solid black;
        border-radius: 2px;
        padding: 8px;
      }
    `;
  }

  handleInput(e) {
    this.dispatchEvent(
      new CustomEvent('input-changed', {detail: {value: e.target.value}})
    );
  }

  @property({type: String}) value = 'Lit';

  render() {
    return html`
      <div class="inputbox">
        <input type="text" value="${this.value}" @input=${this.handleInput} />
      </div>
    `;
  }
}
