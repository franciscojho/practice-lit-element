import { html, css, LitElement } from 'lit-element'
import toggle from './contants.js'
import './components/poke-app-container.js'
import './components/poke-header.js'
import './components/poke-tabs.js'
import './components/poke-footer.js'
import './components/poke-api-loader.js'
import './views/poke-pokedex.js'
import './views/poke-crud.js'
import './views/poke-about.js'

export class PokeApp extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
            `,
        ]
    }
    static get properties() {
        return {
            currentToggle: { type: String },
            githubData: { type: Object },
        }
    }

    constructor() {
        super()
        this.currentToggle = 'pokedex'
        this.githubData = {}
    }

    render() {
        console.log(this.githubData)
        return html`<poke-app-container>
            <poke-api-loader
                apiUrl="https://api.github.com/users/franciscojho"
                @load-api=${this._loadGithubData}
            ></poke-api-loader>
            <poke-header
                .creator=${this.githubData.name}
                .avatar=${this.githubData.avatar_url}
            ></poke-header>
            <poke-tabs
                @set-toggle=${this.setToggle}
                .tabs=${[
                    { title: 'Pokedex', id: toggle.POKEDEX },
                    { title: 'CRUD', id: toggle.CRUD },
                    { title: 'About Me', id: toggle.ABOUT },
                ]}
                .toggle=${this.currentToggle}
            ></poke-tabs>

            ${this.currentToggle === toggle.POKEDEX
                ? html`<poke-pokedex></poke-pokedex>`
                : null}
            ${this.currentToggle === toggle.CRUD ? html`<poke-crud></poke-crud>` : null}
            ${this.currentToggle === toggle.ABOUT
                ? html`<poke-about .data=${this.githubData}></poke-about>`
                : null}

            <poke-footer title="Portfolio - LitElement"></poke-footer>
        </poke-app-container>`
    }

    setToggle(event) {
        this.currentToggle = event.detail
    }

    _loadGithubData(e) {
        this.githubData = e.detail.data
    }
}

customElements.define('poke-app', PokeApp)
