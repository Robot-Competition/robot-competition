import {navbar} from './text.js';


class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header_section">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container">
                    <a class="navbar-brand" href="index.html">
                        <img src="images/logo.jpg" alt="" />
                        <span>${navbar.brand}</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="d-flex  flex-column flex-lg-row align-items-center">
                        <ul class="navbar-nav  ">
                            <li class="nav-item">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false" href="what_is_uofg_cup.html">${navbar.WhatIsUofGCup.WhatIsUofGCup}</a>
                            <ul class="dropdown-menu" aria-labelledBy="navbarDropdown1">
                                <li><a href="what_is_uofg_cup.html"
                                class="dropdown-item">${navbar.WhatIsUofGCup.WhatIsUofGCup}</a></li>
                                <li><a href="rules.html"
                                class="dropdown-item">${navbar.WhatIsUofGCup.Rules}</a></li>
                                <li><a href="past_competitions.html"
                                class="dropdown-item">${navbar.WhatIsUofGCup.PastCompetitions}</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown2" data-toggle="dropdown" aria-expanded="false" href="#">${navbar.UofGCup23.UofGCup23}</a>
                            <ul class="dropdown-menu" aria-labelledBy="navbarDropdown2">
                                <li><a href="uofg_ucp_23.html"
                                class="dropdown-item">${navbar.UofGCup23.UofGCup23}</a></li>
                                <li><a href="leaderboards.html"
                                class="dropdown-item">${navbar.UofGCup23.Leaderboards}</a></li>
                                <li><a href="apply.html"
                                class="dropdown-item">${navbar.UofGCup23.Apply}</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="contact.html">${navbar.Contact}</a>
                            </li>
                        </ul>
                            <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div class="custom_menu-btn ">
                            <button>
                                <span class=" s-1">

                                </span>
                                <span class="s-2">

                                </span>
                                <span class="s-3">

                                </span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
`
    }
}

customElements.define('navbar-component', Navbar);