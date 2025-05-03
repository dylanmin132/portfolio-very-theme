/**
 * Copyright 2025 dylanmin132
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {
  
  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-accent, #f9f9f9);
          font-family: var(--ddd-font-navigation, sans-serif);
        }

        .wrapper {
          margin: 0;
          padding-top: 100px; 
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        
        nav {
          position: fixed;
          background: white;
          border-bottom: 1px solid #ccc;
          z-index: 1000;
        }

        nav ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        nav a {
          text-decoration: none;
          color: var(--ddd-theme-primary);
          font-weight: bold;
          padding: 1rem;
          display: block;
        }

        nav a:hover {
          text-decoration: underline;
        }

        header {
          text-align: center;
          margin-bottom: 2rem;
        }

        h1 {
          color: var(--ddd-theme-primary, #0078d4);
          margin: 0;
          font-size: 2.5rem;
        }

        h2 {
          margin: 0.5rem 0;
          font-weight: normal;
          color: #444;
        }

        section {
          min-height: 100vh;
          width: 100%;
          padding: 2rem;
          box-sizing: border-box;
        }

        ::slotted(*) {
          line-height: 1.6;
          color: #333;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <header>
          <h1>${this.title}</h1>
          <h2>${this.subtitle}</h2>
        </header>

        <section id="about">
          <slot name="about"></slot>
        </section>

        <section id="research">
          <slot name="research"></slot>
        </section>

        <section id="projects">
          <slot name="projects"></slot>
        </section>

        <section id="profDev">
          <slot name="profDev"></slot>
        </section>
      </div>
    `;
  }
  
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);