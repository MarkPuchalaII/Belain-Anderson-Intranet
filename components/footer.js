var thisYear = new Date().getFullYear();
if (thisYear > 2021) { thisYear = '2021-' + thisYear};

class Footer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = `
      Copyright &copy;
      ${thisYear} Belain-Anderson
      <br>All Rights Reserved
    `;
  }
}

customElements.define('footer-component', Footer);