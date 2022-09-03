import React, { Component } from 'react'
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';

export class Layout extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Outlet />
            </div>
        )
    }
}

export default Layout