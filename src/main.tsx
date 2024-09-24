import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Function to wrap a functional React component as a Web Component
function createReactWebComponent(
  Component: React.FC,
  elementName: string
): void {
  class ReactElement extends HTMLElement {
    mountPoint: HTMLDivElement;
    root: ReactDOM.Root | null = null;
    constructor() {
      super();
      this.mountPoint = document.createElement("div");
    }

    connectedCallback(): void {
      this.attachShadow({ mode: "open" });
      this.shadowRoot?.appendChild(this.mountPoint);
      // Render the functional React component inside the Web Component
      this.root = ReactDOM.createRoot(this.mountPoint);
      this.root.render(<Component />);
    }

    disconnectedCallback(): void {
      if (this.root) {
        this.root.unmount();
      }
    }
  }

  window.customElements.define(elementName, ReactElement);
}

// Register the functional component as a Web Component
createReactWebComponent(App, "paint-calculator");
