/** @prettier */
import {LitElement, html, css} from 'lit';
import {property, customElement} from 'lit/decorators.js';

@customElement('input-hello')
export class InputHello extends LitElement {
  static get styles() {
    return css`
      div.hellolit {
        font-size: 24pt;
        font-family: Helvetica, sans-serif;
      }
    `;
  }

  @property({type: String}) name = 'Lit';

  render() {
    return html` <div class="hellolit">Hello, ${this.name}!</div> `;
  }
}
