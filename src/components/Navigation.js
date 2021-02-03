import React from "react"
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <header>
            <div>
                <NavLink to="/" exact>
                    Buoy
                </NavLink>
                <NavLink to="/changelog" exact>
                    Changelog
                </NavLink>
            </div>
        </header>
    )
}