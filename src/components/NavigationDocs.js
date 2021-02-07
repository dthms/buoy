import React from "react"
import { NavLink } from "react-router-dom";

export default function NavigationDocs() {
    return (
        <nav className="flex w-1/5 flex-col space-y-8 flex-shrink">
            <div className="flex flex-col space-y-2">
                <p className="sm font-semibold mb-1">Getting started</p>
                <NavLink to="/docs" exact className="text-gray-600" activeClassName="activeLink">Getting started</NavLink>
            </div>
            <div className="flex flex-col space-y-2">
                <p className="sm font-semibold mb-1">Foundations</p>
                <NavLink to="/docs/colors" exact className="text-gray-600" activeClassName="activeLink">Colors</NavLink>
                <NavLink to="/docs/typography" exact className="text-gray-600" activeClassName="activeLink">Typography</NavLink>
                <NavLink to="/docs/spacing" exact className="text-gray-600" activeClassName="activeLink">Spacing</NavLink>
            </div>
            <div className="flex flex-col space-y-2">
                <p className="sm font-semibold mb-1">Components</p>
                <NavLink to="/docs/radio-button" exact className="text-gray-600" activeClassName="activeLink">Radio</NavLink>
                <NavLink to="/docs/checkbox" exact className="text-gray-600" activeClassName="activeLink">Checkbox</NavLink>
                <NavLink to="/docs/textfield" exact className="text-gray-600" activeClassName="activeLink">Textfield</NavLink>
            </div>
        </nav>
    )
}