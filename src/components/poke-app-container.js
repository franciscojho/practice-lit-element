import { html, css, LitElement } from 'lit-element'

export class PokeAppContainer extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                .app-container {
                    height: 100vh;
                    min-height: 100%;
                    box-sizing: border-box;
                }
                @media (min-width: 1080px) {
                    .app-container {
                        max-width: 1080px;
                        margin: auto;
                    }
                }
            `,
        ]
    }

    constructor() {
        super()
    }

    render() {
        return html`<div class="app-container">
            <slot></slot>
        </div>`
    }
}

customElements.define('poke-app-container', PokeAppContainer)
