import { html, css, LitElement } from 'lit-element'

export class PokeInputField extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            placeholder: { type: String },
            textarea: { type: Boolean },
            name: { type: String },
            value: { type: String },
        }
    }

    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                input,
                textarea {
                    width: 90%;
                    padding: 0.5rem 1rem;
                }
            `,
        ]
    }

    constructor() {
        super()
        this.type = 'text'
        this.placeholder = 'insert here'
        this.textarea = false
        this.name = ''
        this.value = ''
    }

    render() {
        return html`${!this.textarea
            ? html`<input
                  @input=${this.inputChange}
                  type=${this.text}
                  placeholder=${this.placeholder}
                  name=${this.name}
                  .value=${this.value}
              />`
            : html`<textarea
                  @input=${this.inputChange}
                  placeholder=${this.placeholder}
                  name=${this.name}
                  .value=${this.value}
              ></textarea>`}`
    }

    inputChange(event) {
        this.dispatchEvent(
            new CustomEvent('input-change', {
                detail: event.target.value,
            })
        )
    }
}
customElements.define('poke-input-field', PokeInputField)
