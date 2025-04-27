/**
 * Copyright 2025 dylanmin132
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
    .topScreen {
      position: fixed;
      top: 20px;
      left: 0;
      width: 100vw;
      background-color: var(--ddd-theme-primary, #0078d4);
      color: #fff;
      padding: 16px;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      border-radius: 8px;

    }
    button {
      padding: 8px 16px;
      background-color: var(--ddd-theme-primary, #0078d4);
      color: #fff;
      border-radius: 4px;
      }
    button:hover {
      background-color: var(--ddd-theme-secondary, #005a9e)
    }
    
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="topSection">
    <h3><span>${this.t.title}:</span> ${this.title}</h3>
    <p>${this.subtitile}</p>
  </div>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);