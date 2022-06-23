import { LitElement } from 'lit-element'

export class PokeApiLoader extends LitElement {
    static get properties() {
        return {
            data: { type: Object },
            apiUrl: { type: String },
        }
    }

    connectedCallback() {
        super.connectedCallback()
        this._loadData()
    }

    async _loadData() {
        const response = await fetch(this.apiUrl)
        const data = await response.json()
        this.data = { data }
        this.dispatchEvent(new CustomEvent('load-api', { detail: this.data }))
    }
}
customElements.define('poke-api-loader', PokeApiLoader)
