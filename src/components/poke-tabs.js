import { html, css, LitElement } from 'lit-element'

export class PokeTabs extends LitElement {
    static get styles() {
        return [
            css`
                * {
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                .nav {
                    display: flex;
                    justify-content: space-around;
                    list-style-type: none;
                }
                .nav li {
                    width: 100%;
                    text-align: center;
                    padding: 0.5rem;
                }
                .active {
                    background-color: #333333;
                    color: #ffffff;
                }
            `,
        ]
    }
    static get properties() {
        return {
            toggle: { type: String },
            tabs: { type: Array },
        }
    }

    constructor() {
        super()
        this.toggle = ''
        this.tabs = [{ title: 'Home', id: 'home' }]
    }

    render() {
        return html`
            <ul @click=${this.setToggle} class="nav">
                ${this.tabs.map(
                    (tab) =>
                        html`<li
                            class="${this.toggle === tab.id && 'active'}"
                            role="button"
                            data-toggle=${tab.id}
                            tabindex="0"
                        >
                            ${tab.title}
                        </li>`
                )}
            </ul>
        `
    }

    setToggle(event) {
        this.dispatchEvent(
            new CustomEvent('set-toggle', {
                detail: event.target.dataset.toggle,
            })
        )
    }
}

customElements.define('poke-tabs', PokeTabs)
