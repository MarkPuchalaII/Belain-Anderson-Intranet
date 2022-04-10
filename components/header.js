const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    #links {
      display: flex;
      height: 100%;
    }

    a, svg, button {
      height: 100%;
      place-items: center;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      display: flex;
      place-items: center;
      color: white;
      text-decoration: none;
    }

    
    a:hover, svg:hover {
      text-decoration: none;
      background: #292823;
    }

    #hamburger {
      display: none;
    }

    #menu {
      display: flex;
      height: 100%;
      position: relative;
    }

    @media only screen and (max-width: 640px) {
      a:not(#hamburger) {
        height: 3rem;
        padding-left: 1rem;
      }

      #links {
        display: none;
        position: absolute;
        z-index: 2;
      }

      #hamburger {
        display: block;
        float: right;
        padding: 0;
        margin-left: auto;
      }
      svg {
        filter: invert(100%) sepia(0%) saturate(7450%) hue-rotate(220deg) brightness(103%) contrast(101%);
        cursor: pointer;
      }

      .topnav.responsive {
        background: #121212;
        display: block;
        flex-direction: column;
        top: 3rem;
        height: calc(100vh - 3rem);
        width: 15rem;
      }
    }

  </style>

  <script>
    function myFunction() {
      var x = document.getElementById("links");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  </script>


  <a href='/'> <img alt= 'Company logo; click here to go home' src="/images/companyLogo.jpeg" style= "width: 82px"> </a>

  <div id='links' class='topnav'>
    <a class='subMenu' href='/projects/index.html'> Projects </a>
    <a class='subMenu' href='/schedule/index.html'> Schedule </a>
    <a class='subMenu' href='/finances'> Finances </a>
    <a class='subMenu' href='/knowledge_base/index.html'> Knowledge Base </a>
  </div>
  <a id='hamburger' href='javascript:void(0)' onclick='myFunction()'>
  <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="90" height="12"></rect>
      <rect y="30" width="90" height="12"></rect>
      <rect y="60" width="90" height="12"></rect>
    </svg>
  </a>
`;


class Header extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
