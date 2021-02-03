import React from "react"
import { NavLink } from "react-router-dom";

import Logo from "../logo.svg";

export default function Navigation() {
    return (
        <header className="relative z-10 py-9 lg:px-20 flex items-center space-x-5">
            <NavLink to="/" exact>
                <img src={Logo} />
            </NavLink>
            <nav className="flex flex-grow space-x-5">
                {/* <NavLink to="/changelog" exact className="text-gray-600">
                    Changelog
                </NavLink> */}
            </nav>
            <a href="https://twitter.com/intent/tweet?text=@danthms%20@joshuathorley" target="_blank" className="block text-blue-600 font-bold">Tweet us</a>
        </header>
    )
}