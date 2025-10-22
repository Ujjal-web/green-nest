import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy Policy</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                        <NavLink to="https://www.instagram.com/"><FaInstagram /></NavLink>
                        <NavLink to="https://www.facebook.com/"><FaFacebook /></NavLink>
                        <NavLink to="https://www.pinterest.com/"><FaPinterest /></NavLink>

                    </div>
                </nav>
                <aside>
                    <p>© {new Date().getFullYear()} <span className='text-green-700 georama-font text-lg font-bold'>GreenNest</span>. All rights reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;