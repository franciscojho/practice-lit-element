import { html, css, LitElement } from 'lit-element'

export class PokeItem extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            variant: { type: String },
            img: { type: String },
            svg: { type: String },
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
                .item {
                    display: flex;
                    align-items: center;
                    border-radius: 5px;
                    box-shadow: 0 0 5px #ccc;
                    flex-basis: calc(100% / 5);
                    flex-direction: column;
                    height: auto;
                    justify-content: center;
                    vertical-align: middle;
                    width: 100%;
                    padding: 0.2rem;
                }
                .item img {
                    width: 6rem;
                }
                .svg {
                    padding: 1rem;
                }
            `,
        ]
    }

    constructor() {
        super()
        this.name = ''
        this.img = null
        this.svg = null
    }

    render() {
        // console.log(this.svg)
        return html`<figure class="item">
            ${this.img ? html`<img src=${this.img} />` : null}
            ${this.svg ? html`<div class="svg"></div> ` : null}
            <figcaption>${this.name}</figcaption>
        </figure>`
    }

    firstUpdated() {
        super.firstUpdated()
        if (this.svg) this.renderRoot.querySelector('.svg').innerHTML = this.svg
    }
}
customElements.define('poke-item', PokeItem)
