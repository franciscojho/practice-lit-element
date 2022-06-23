import { html, css, LitElement } from 'lit-element'
import './poke-avatar.js'

export class PokeHeader extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }
                header {
                    background-color: #f5f5f5;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    height: 10%;
                }
                img {
                    width: 3rem;
                    border-radius: 50%;
                }
            `,
        ]
    }

    static get properties() {
        return {
            title: { type: String },
            avatar: { type: String },
        }
    }

    constructor() {
        super()
        this.creator = 'Creator Name'
        this.avatar = ''
    }

    render() {
        return html`<header>
            <span>${this.creator}</span>
            <poke-avatar .classes=${{ sm: true }} .avatar=${this.avatar}></poke-avatar>
            <!-- <img src=${this.avatar} /> -->
        </header>`
    }
}

customElements.define('poke-header', PokeHeader)
