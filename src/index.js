class MyComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = "my component";
    }
}

customElements.define('my-component', MyComponent);