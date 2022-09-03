import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png"

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
            showSearch: false
        };
    }
    render() {
        const toogleSidebar = () => {
            this.setState({ showSidebar: !this.state.showSidebar })
        }
        const toogleSearch = () => {
            this.setState({ showSearch: !this.state.showSearch })
        }
        return (
            <header>
                <div className='bg-slate-50 shadow-lg p-2'>
                    <div className='max-w-2xl mx-auto flex justify-between items-center'>
                        <div>
                            <button onClick={toogleSidebar} className='flex items-center bg-slate-100 hover:bg-slate-200 duration-300 p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <span className='ml-1'>Menu</span>
                            </button>
                        </div>
                        <div className="bg-slate-100 hover:bg-slate-200 duration-300 p-2 rounded-md">
                            <Link to="/">
                                <img src={Logo} alt="Finflik Logo" />
                                <span className="sr-only">Home</span>
                            </Link>
                        </div>
                        <div>
                            <button onClick={toogleSearch} className='flex items-center bg-slate-100 hover:bg-slate-200 duration-300 p-2 rounded-lg'>
                                <span className='mr-1'>Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className={`fixed top-0 w-64 h-screen z-50 p-5 flex flex-col space-y-2 bg-gradient-to-br from-blue-700 to-blue-500 text-white duration-300 ${this.state.showSidebar ? "left-0" : "-left-64"}`}>
                    <span onClick={toogleSidebar} className="text-right text-4xl cursor-pointer">&times;</span>
                    <Link className="font-semibold text-xl hover:text-blue-100 hover:underline" to="/">Home</Link>
                    <Link className="font-semibold text-xl hover:text-blue-100 hover:underline" to="/about">About</Link>
                    <span className="font-semibold text-xl mt-4">Countries</span>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/in">India</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/us">United States</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/cn">China</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/fr">France</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/ru">Russia</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/ua">Ukraine</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/br">Brazil</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/ca">Canada</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/de">Germany</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/gr">Greece</Link>
                    <Link className="ml-2 font-semibold text-sm hover:text-blue-100 hover:underline" to="/top/it">Italy</Link>
                </nav>
                <div className={this.state.showSearch ? "block" : "hidden"}>
                    <div onClick={toogleSearch} className="fixed inset-0 bg-gray-600 bg-opacity-70 backdrop-blur-md	 overflow-y-auto h-full w-full"></div>
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 p-5 w-11/12 max-w-xl shadow-lg rounded-md bg-white">
                        <div className="w-full flex justify-between items-center">
                            <input type="search" placeholder='Search...' name="q" className="w-full p-2 text-xl border-2 rounded-l-md outline-none" />
                            <button type="submit" className="p-3 rounded-r-md bg-blue-600 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

export default NavBar