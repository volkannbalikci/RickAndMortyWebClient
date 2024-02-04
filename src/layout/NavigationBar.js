import { React } from 'react'
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Rick & Morty</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <div className="navbar-nav fs-5">
                    <NavLink to="/karakterler" karakterler className="nav-link">
                        Karakterler
                    </NavLink>
                    <NavLink to="/bolumler" className="nav-link">
                        Bölümler
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to="/konumlar"
                    >
                        Konumlar
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
}

export default NavigationBar;