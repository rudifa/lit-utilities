/** @prettier */

import {LitElement, html} from 'lit';
import {property, customElement} from 'lit/decorators.js';

import './input-hello';
import './input-box';

@customElement('input-demo')
export class InputDemo extends LitElement {
  //

  inputChanged(e) {
    this.name = e.detail.value;
  }
  @property({type: String}) name = 'visitor';

  render() {
    return html`
      <input-box value="${this.name}" @input-changed=${this.inputChanged}>
      </input-box>
      <input-hello name="${this.name}"></input-hello>
    `;
  }
}
