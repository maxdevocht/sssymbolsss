import React from "react";
import { EqualFill } from 'akar-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src="./src/assets/img/logo.png" alt="Logo" className="logo" />
            <a href="#" className="menu--btn"><EqualFill strokeWidth={2} size={36} /></a>
        </nav>
    )
}