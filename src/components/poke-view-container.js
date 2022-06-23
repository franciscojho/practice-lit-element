import { html, css, LitElement } from 'lit-element'

export class PokeViewContainer extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                .view-container {
                    height: 75%;
                    overflow: auto;
                    padding: 1rem;
                    width: 100%;
                }
            `,
        ]
    }

    onChangeInput(e) {
        this.inputValue = e.target.value
    }

    constructor() {
        super()
    }

    render() {
        return html`<div class="view-container">
            <slot></slot>
        </div>`
    }
}

customElements.define('poke-view-container', PokeViewContainer)
