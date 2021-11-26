import React, { useState } from "react";
import PropTypes from 'prop-types';
import style from "./style.css"

function Discover(props) {

    return (
        <div>
            <div class="uk-flex uk-flex-center uk-margin">
                <form class="uk-search uk-search-default">
                    <a href="" class="uk-search-icon-flip" uk-search-icon></a>
                    <input class="uk-search-input" type="search" placeholder="Search"/>
                    <button class="uk-button uk-button-default">Button</button>

                </form>
            </div>
        </div>
    )
}

export default Discover;