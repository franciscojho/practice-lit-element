import { html, css, LitElement } from 'lit-element'
import '../components/poke-view-container.js'
import '../components/poke-avatar.js'

export class PokeAbout extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                div {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    gap: 1rem;
                    height: 100%;
                    justify-content: center;
                    margin: 0 auto;
                    text-align: center;
                    width: 40%;
                }
            `,
        ]
    }

    static get properties() {
        return {
            data: { type: Object },
        }
    }

    constructor() {
        super()
        this.data = {}
    }

    render() {
        console.log(this.data)
        return html`<poke-view-container>
            <div>
                <poke-avatar
                    .classes=${{ lg: true }}
                    avatar=${this.data.avatar_url}
                ></poke-avatar>
                <p>${this.data.name}</p>
                <p>${this.data.login}</p>
                <p>${this.data.location}</p>
                <p>${this.data.bio}</p>
            </div>
        </poke-view-container>`
    }
}
customElements.define('poke-about', PokeAbout)
