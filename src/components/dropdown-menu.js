/** @prettier */
/**
 * Copyright © 2022 Rudolf Farkas
 * License MIT
 */

import {LitElement, html, css} from 'lit';
import {property, customElement} from 'lit/decorators.js';

/**
 * A dropdown menu component
 *   Displays a dropdown list of options
 *   On user selection, dispatches a custom event with the selected value
 * Inputs:
 * - eventid: String, the event id to dispatch when the menu is clicked
 * - label: String, the label to display in the menu
 * - options: Object, e.g { t: 'Triangle', s: 'Square', p: 'Pentagon', c: 'Circle' }
 * - selected: String, the selected option
 * Outputs:
 * - eventid, selected-option
 */
@customElement('dropdown-menu')
export class DropdownMenu extends LitElement {
  static styles = css`
    :host {
      padding: 10px;
    }

    div.wrap {
      border-radius: 1rem;
      border: 3px solid var(--primary-color);
      color: var(--primary-color);
      font-family: Helvetica, sans-serif;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
    }

    .select {
      color: var(--primary-color);
      font-size: 1.5rem;
    }
  `;

  @property({type: String}) eventid = 'dropdown-menu-event';
  @property({type: String}) label = 'Choose a branch:';
  @property({type: Object}) options = {
    a: 'Art',
    b: 'Biology',
    c: 'Chemistry',
    d: 'Drama',
    e: 'English',
  };
  @property({type: String}) selected = undefined;

  firstUpdated() {
    this.setSelected('id-select', this.selected);
  }

  optionsView(options) {
    const keys = Object.keys(options);
    return html`
      ${keys.map(
        (key) => html`<option value="${key}">${options[key]}</option>`
      )}
    `;
  }

  setSelected(id, value) {
    console.log('setSelected id:', id, 'value:', value);
    let element = this.shadowRoot.getElementById(id);
    element.value = value;
  }

  updateSelected(e) {
    this.selected = e.target.value;
    const event = customEvent(this.eventid, this.selected);
    console.log('updateSelected selected:', this.selected, 'newEvent:', event);
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="wrap">
        <label> ${this.label} </label>
        <select class="select" id="id-select" @change="${this.updateSelected}">
          ${this.optionsView(this.options)}
        </select>
      </div>
    `;
  }
}

/**
 * Returns a custom event ready for dispatch.
 * @param {*} eventid
 * @param {*} value
 * @returns {Event}
 */
const customEvent = (eventid, value) => {
  const event = new CustomEvent(eventid, {
    detail: value,
    bubbles: true,
    composed: true,
  });
  return event;
};
