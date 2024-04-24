import React from "react";
import { EqualFill } from 'akar-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src="/logo.png" alt="Logo" className="logo" />
            <a href="#" className="menu--btn"><EqualFill strokeWidth={2} size={36} /></a>
            <div className="socials">
                <a href="#"><i class="ri-instagram-fill"></i></a>
                <a href="#"><i class="ri-twitter-x-fill"></i></a>
                <a href="#"><i class="ri-shopping-cart-2-fill"></i></a>
                
            </div>
        </nav>
    )
}