import React from "react";
import "./Header.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/esm/NavLink";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

//bootstrap
// const Header = () => {
//     return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
//             <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//                 <Nav className="navbar-title">
//                     <NavLink eventKey="1" as={Link} href="/home">Home</NavLink>
//                     <NavLink eventKey="2" as={Link} href="/listofevents">List of Events</NavLink>
//                     <NavLink eventKey="3" as={Link} href="/about">About us</NavLink>
//                 </Nav>
//             </Navbar.Collapse>
//             <Button className="loginButton" variant="outline-info">Login</Button>
//             <Button className="registerButton" variant="outline-info">Register</Button>
//         </Navbar>
//     )
// }   

//tailwind
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        

            <nav className="w-full dark:bg-neutral-800 shadow top-0">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 top-0">
                    <div>
                        <div className="flex items-center justify-between md:py-5 md:block">
                            <a href="javascript:void(0)" className="text-white no-underline">
                                <h2 className="text-xl font-bold text-white mt-2">Event Mangement</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}>
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button> 
                             </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center mt-2 md:block md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pt-2">
                                <li className="text-white hover:text-indigo-200">
                                    <a href="javascript:void(0)" className="text-white no-underline">Home</a>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <a href="javascript:void(0)" className="text-white no-underline">Blog</a>
                                </li>
                                <li className="text-white hover:text-indigo-200 no-underline">
                                    <a href="javascript:void(0)" className="text-white no-underline">About US</a>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <a href="javascript:void(0)" className="text-white no-underline">Contact US</a>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Sign in
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <a href="javascript:void(0)" className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 no-underline">
                            Register
                        </a>
                        <a href="javascript:void(0)" className="px-4 py-2 text-gray-900 bg-white rounded-md shadow hover:bg-gray-800 no-underline">
                            Login
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
    

export default Header;
