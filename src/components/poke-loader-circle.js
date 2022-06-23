import { html, css, LitElement } from 'lit-element'

export class PokeLoaderCircle extends LitElement {
    static get styles() {
        return [
            css`
                .loader {
                    border: 16px solid #f3f3f3; /* Light grey */
                    border-top: 16px solid #3498db; /* Blue */
                    border-radius: 50%;
                    width: 120px;
                    height: 120px;
                    animation: spin 2s linear infinite;
                    margin: 0 auto;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `,
        ]
    }

    render() {
        return html`<div class="loader"></div>`
    }
}
customElements.define('poke-loading', PokeLoaderCircle)
