import { html, css, LitElement } from 'lit-element'
import './poke-item'

export class PokeItemList extends LitElement {
    static get styles() {
        return [
            css`
                .list {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    height: 100%;
                }
            `,
        ]
    }

    static get properties() {
        return {
            list: { type: Object },
            variant: { type: String },
            emptyListMessage: { type: String },
            noEmptyMessage: { type: Boolean },
        }
    }

    constructor() {
        super()
        this.list = []
        this.variant = 'img'
        this.noEmptyMessage = false
        this.emptyListMessage = 'no items'
    }

    render() {
        return html`<div class="list">${this._renderListOrEmpty()}</div>`
    }

    _renderListOrEmpty() {
        if (this.list.length !== 0 && this.variant === 'img') {
            return this.list.map(
                (item) => html`<poke-item name=${item.name} img=${item.img}></poke-item>`
            )
        } else if (this.list.length !== 0 && this.variant === 'svg') {
            return this.list.map(
                (item) => html`<poke-item name=${item.name} svg=${item.svg}></poke-item>`
            )
        } else if (!this.noEmptyMessage) {
            return html`<p>${this.emptyListMessage}</p>`
        } else {
            return null
        }
    }
}
customElements.define('poke-item-list', PokeItemList)
