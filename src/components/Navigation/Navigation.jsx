
import {NavLink} from "react-router-dom";


import "./Navigation.scss"

function Navigation () {
    return <ul className="header__nav">
    <li className="nav-item">
        <NavLink to="/" activeClassName="active" className="nav-link">
            Main
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="/basket" activeClassName="active" className="nav-link">
            Cart
        </NavLink>   
    </li>
    <li className="nav-item">
        <NavLink to="/favorites" activeClassName="active" className="nav-link">
            Favorite
        </NavLink>
    </li>
    </ul>
}

export default Navigation;