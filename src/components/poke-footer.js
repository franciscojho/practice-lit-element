import { html, css, LitElement } from 'lit-element'

export class PokeFooter extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }
                footer {
                    display: flex;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                    background-color: #f5f5f5;
                }
            `,
        ]
    }

    static get properties() {
        return {
            title: { type: String },
        }
    }

    constructor() {
        super()
        this.title = 'This is a footer'
    }

    render() {
        return html`<footer>
            <span>${this.title}</span>
        </footer>`
    }
}

customElements.define('poke-footer', PokeFooter)
