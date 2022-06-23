import { html, css, LitElement } from 'lit-element'
import '../components/poke-view-container.js'
import '../components/poke-item-list.js'
import '../components/poke-item.js'
import '../components/poke-input-field.js'
import '../components/poke-api-loader.js'
import '../components/poke-loader-circle.js'

export class PokePokedex extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                :host {
                    text-align: center;
                }
                div {
                    text-align: center;
                }
                form {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                }
            `,
        ]
    }

    static get properties() {
        return {
            _pokemons: { type: Array },
            inputValue: { type: String },
        }
    }

    constructor() {
        super()
        this._pokemons = []
        this.inputValue = ''
    }

    render() {
        const pokemons = this._pokemons.filter((pokemon) =>
            pokemon.name.includes(this.inputValue)
        )
        return html`<poke-view-container>
            <div>
                <poke-api-loader
                    apiUrl="https://pokeapi.co/api/v2/pokemon/?limit=151"
                    @load-api=${this._loadPokemons}
                ></poke-api-loader>
                <h1>Pokedex</h1>
                <form>
                    <poke-input-field
                        @input-change=${this.inputChange}
                        type="text"
                        placeholder="Search for a Pokemon"
                    ></poke-input-field>
                </form>
                ${pokemons.length === 0
                    ? html`<poke-loading></poke-loading>`
                    : html`<poke-item-list
                          .list=${pokemons}
                          noEmptyMessage
                      ></poke-item-list>`}
            </div>
        </poke-view-container>`
    }

    async _loadPokemons(e) {
        const litePokemons = e.detail.data.results
        const promises = litePokemons.map(async (litePokemon) => {
            const resp = await fetch(litePokemon.url)
            const data = await resp.json()
            return { ...litePokemon, img: data.sprites.front_default }
        })
        const pokemons = await Promise.all(promises)
        this._pokemons = pokemons
    }

    inputChange(e) {
        this.inputValue = e.detail
    }
}
customElements.define('poke-pokedex', PokePokedex)
