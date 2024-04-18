import React from "react";
import { EqualFill } from 'akar-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src="./src/assets/img/logo.png" alt="Logo" className="logo" />
            <a href="#" className="menu--btn"><EqualFill strokeWidth={2} size={36} /></a>
            <div className="socials">
                <i class="ri-instagram-fill"></i>
                <i class="ri-twitter-x-fill"></i>
                <div className="cart">
                    <i class="ri-shopping-cart-2-fill"></i>
                </div>
            </div>
        </nav>
    )
}