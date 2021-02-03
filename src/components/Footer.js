import React from "react"
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-12 lg:px-20 flex items-center space-x-5">
            <NavLink to="/" exact>
                <svg width="57" height="22" viewBox="0 0 57 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.208 8.456C12.872 7.808 13.832 6.32 13.832 4.496C13.832 1.88 11.84 0.199999 8.432 0.199999H0.92V17H9.248C12.296 17 14.336 15.248 14.336 12.272C14.336 10.664 13.496 8.936 10.208 8.456ZM4.664 3.536H7.928C9.056 3.536 9.872 4.04 9.872 5.144C9.872 6.392 9.272 6.992 8.072 6.992H4.664V3.536ZM8.312 13.664H4.664V10.088H8.168C9.488 10.088 10.376 10.64 10.376 11.792C10.376 13.088 9.68 13.664 8.312 13.664ZM24.1576 5V10.832C24.1576 12.992 23.2456 13.928 21.8056 13.928C20.4616 13.928 19.7896 13.256 19.7896 11.792V5H16.1416V12.008C16.1416 15.536 17.5096 17.24 20.3656 17.24C22.3336 17.24 23.5816 16.256 24.1576 14.288V17H27.8056V5H24.1576ZM36.2694 4.76C32.7174 4.76 29.7414 7.136 29.7414 11.024C29.7414 14.888 32.7174 17.24 36.2694 17.24C39.8214 17.24 42.7974 14.888 42.7974 11.024C42.7974 7.136 39.8214 4.76 36.2694 4.76ZM36.2694 13.928C34.3014 13.928 33.3894 12.992 33.3894 11.024C33.3894 9.008 34.3014 8.072 36.2694 8.072C38.2374 8.072 39.1494 9.008 39.1494 11.024C39.1494 12.992 38.2374 13.928 36.2694 13.928ZM52.1382 5L50.0742 11.672L49.4262 14.096L48.8262 11.672L46.8582 5H42.9222L47.5782 17.888H43.8822V21.08H46.2822C49.2582 21.08 50.5302 19.976 51.2742 17.96L56.0743 5H52.1382Z" fill="#111827"/>
                </svg>
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