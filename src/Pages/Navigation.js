import React from 'react'
import {
    NavLink
  } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="container row">
                <div className="menu">
                    <div className="nav-label">Menu</div>
                    <ul className="menu-items">
                        <NavLink to="/"><li><span>Home</span></li></NavLink>
                        <NavLink to="/case"><li><span>Case Studies</span></li></NavLink>
                        <NavLink to="/approach"><li><span>Approach</span></li></NavLink>
                        <NavLink to="/services"><li><span>Services</span></li></NavLink>
                        <NavLink to="/about"><li><span>About us</span></li></NavLink>
                    </ul>
                </div>
                <div className="contact">
                    <div className="nav-label">Contact</div>
                    <div className="nav-infos">
                        <ul className="nav-items">
                            <li className="nav-info-label">Email</li>
                            <li><span>Get in touch with us</span></li>
                            <li><span>Get a free audit</span></li>
                        </ul>
                        <ul className="nav-items">
                            <li className="nav-info-label">Headquarterl</li>
                            <li><span>Khulshi Block A</span></li>
                            <li><span>House 135</span></li>
                            <li><span>Bangladesh</span></li>
                        </ul>
                        <ul className="nav-items">
                            <li className="nav-info-label">Phone</li>
                            <li><span>+8801716223</span></li>
                        </ul>
                        <ul className="nav-items">
                            <li className="nav-info-label">Legal</li>
                            <li><span>Privacy & Cookies</span></li>
                        </ul>
                    </div>

                </div>               
            </div>
        </div>
    )
}
