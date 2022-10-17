import { html, LitElement } from 'lit-element';
import '@dile/dile-input/dile-input';


export class DilePasswordChecker extends LitElement {

  /**
   * Fired when the passwords are different
   *
   * @event dile-password-checker-error
   */

  /**
   * Fired when the passwords are the same
   *
   * @event dile-password-checker-validate
   */

  static get properties() {
    return {
      /** Label to the element */
      label: {
        type: String
      },
      /** Button label */
      buttonLabel: {
        type: String,
        attribute: 'button-label'
      },
      /** Validate button label */
      validateLabel: {
        type: String,
        attribute: 'validate-label'
      },
      /** Hide password flag */
      hidePassword: {
        type: Boolean
      },
      /** Error flag */
      error: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.label = '';
    this.buttonLabel = '';
    this.validateLabel = '';
    this.hidePassword = true;
    this.error = false;
  }

  /** Toggle hide password */
  _toggleHidePassword() {
    this.hidePassword = !this.hidePassword;
  }

  /** 
   * Validate password
   * @event dile-password-checker-error
   * @event dile-password-checker-validate
   */
  _validate() {
    const pass1 = this.shadowRoot.querySelector('#password1').value;
    const pass2 = this.shadowRoot.querySelector('#password2').value;
    this.error = pass1 === '' || pass2 === '' || pass1 !== pass2;
    this.dispatchEvent(
      new CustomEvent(`dile-password-checker-${this.error ? 'error' : 'valid'}`, {
        detail: true,
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
        <dile-input 
          id="password1" 
          label="${this.label}" 
          type="${this.hidePassword ? 'password' : 'text'}">
        </dile-input>
        <dile-input 
          id="password2" 
          ?errored=${this.error}
          type="${this.hidePassword ? 'password' : 'text'}">
        </dile-input>
        <button @click=${this._toggleHidePassword}>${this.buttonLabel}</button>
        <button @click=${this._validate}>${this.validateLabel}</button>
    `;
  }
}