import { html, css, LitElement } from 'lit-element'
import avatar from 'animal-avatar-generator'
import '../components/poke-view-container.js'
import '../components/poke-input-field.js'
import '../components/poke-item-list.js'

export class PokeCrud extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                form {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                form > button {
                    width: 14rem;
                    align-self: center;
                    padding: 1rem 1rem;
                    border: none;
                    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                }
                :host {
                    text-align: center;
                }
            `,
        ]
    }
    static get properties() {
        return {
            svg: { type: String },
            formValues: { type: Object },
            list: { type: Array },
        }
    }

    constructor() {
        super()
        this.svg = ''
        this.formValues = { pokeName: '', pokeDescription: '' }
        this.newPokemons = []
    }

    render() {
        return html`<poke-view-container>
            <div>
                <h1>Pokemon Generator</h1>
                <form @submit=${this._onSubmit}>
                    <poke-input-field
                        @input-change=${this._inputChange}
                        name="pokeName"
                        placeholder="Add the pokemon name"
                        .value=${this.formValues.pokeName}
                    ></poke-input-field>
                    <poke-input-field
                        @input-change=${this._inputChange}
                        textarea
                        name="pokeDescription"
                        placeholder="Add the pokemon description"
                        .value=${this.formValues.pokeDescription}
                    ></poke-input-field>
                    <button type="submit">Generate new pokemon</button>
                </form>
                <div class="new-pokemons">
                    <poke-item-list
                        .list=${this.newPokemons}
                        variant="svg"
                    ></poke-item-list>
                </div>
            </div>
        </poke-view-container>`
    }

    firstUpdated() {
        super.firstUpdated()
    }

    _inputChange(e) {
        this.formValues = { ...this.formValues, [e.target.name]: e.detail }
    }

    _onSubmit(e) {
        e.preventDefault()
        this.svg = avatar(this._generateSeeder(), { size: 50 })
        this.newPokemons = [
            ...this.newPokemons,
            {
                name: this.formValues.pokeName,
                description: this.formValues.pokeDescription,
                svg: avatar(this._generateSeeder(), { size: 50 }),
            },
        ]
        this.formValues = { pokeName: '', pokeDescription: '' }
    }
    _generateSeeder() {
        return `${this.formValues.pokeName}${Math.floor(Math.random() * 100)}${
            this.formValues.pokeDescription
        }`
    }
}
customElements.define('poke-crud', PokeCrud)
