import React from "react"
import { NavLink } from "react-router-dom";

import Logo from "../logo-grayscale.svg";

export default function Footer() {
    return (
        <footer className="py-12 lg:px-20 flex items-center space-x-5">
            <NavLink to="/" exact>
                <img src={Logo} alt="Buoy logo" />
            </NavLink>
            <nav className="flex flex-grow space-x-5">
                <NavLink to="/changelog" exact className="text-gray-600 text-sm">
                    Changelog
                </NavLink>
            </nav>
            <span className="text-gray-600 text-sm">Made by <a href="https://twitter.com/danthms" target="_blank" alt="Daniel Thomas Twitter Link" className="underline text-gray-500">Daniel T</a> & <a href="https://twitter.com/joshuathorley" target="_blank" alt="Joshua Thorley Twitter Link" className="underline text-gray-500">Joshua T</a></span>
        </footer>
    )
}