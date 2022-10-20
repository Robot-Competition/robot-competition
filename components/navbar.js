import {navbar} from '../resources/text.js';


class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <navbar>
            <nav class="navbar navbar-expand-sm">
                <div class="container navbar-container">
                    <div class="navbar-brand">  
                        <a 
                            href="#" 
                            class="">
                            ${navbar.UofGCup}
                        </a>
                    </div>
                    <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        class="navbar-toggler"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav pull-right justify-content-center">
                            <li class="nav-item active">
                                <a href="#" class="nav-link active">
                                    ${navbar.WhatIsUofGCup.WhatIsUofGCup}
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle"
                                id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                                    ${navbar.UofGCup23.UofGCup23}
                                </a>
                                <ul class="dropdown-menu"
                                aria-labelledBy="navbarDropdown">
                                    <li><a href="#"
                                    class="dropdown-item">Feature #1</a></li>
                                    <li><a href="#"
                                    class="dropdown-item">Feature #2</a></li>
                                    <li><a href="#"
                                    class="dropdown-item">Feature #3</a></li>
                                </ul>
                            </li>
        
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                ${navbar.Contact}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </navbar>
`
    }
}

customElements.define('navbar-component', Navbar);