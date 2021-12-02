import React, { useState } from "react";
import PropTypes from 'prop-types';
import { getThemeProps } from "@mui/system"
import './style.css'

function NavBar(props) {

    return (
        <>
            <div>
                <nav className="uk-navbar-container navbar" uk-navbar="true">
                    <div>
                        <a className="uk-navbar-item uk-logo nav-logo" href="/discover">PETIT | LOGO</a>
                    </div>
                    <div>
                        <ul className="uk-navbar-nav nav-items">
                            <li>
                                <a href="/discover">Discover</a>
                            </li>
                            <li>
                                <a href={`/profile`}>Profile</a>
                            </li>
                            <li>
                                <a href="/logout">Login/Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar;