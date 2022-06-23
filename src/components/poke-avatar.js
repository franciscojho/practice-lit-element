import { html, css, LitElement } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'

export class PokeAvatar extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                img {
                    border-radius: 50%;
                }
                .sm {
                    width: 3rem;
                }
                .lg {
                    width: 8rem;
                }
            `,
        ]
    }

    static get properties() {
        return {
            avatar: { type: String },
            classes: { type: Object },
        }
    }

    constructor() {
        super()
        this.avatar = ''
        this.classes = { sm: false, lg: false }
    }

    render() {
        return html`<img class=${classMap(this.classes)} src=${this.avatar} />`
    }
}
customElements.define('poke-avatar', PokeAvatar)
