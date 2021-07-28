import React from 'react'
import {HashRouter, Link} from "react-router-dom";


const MenuList = () => {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Users</Link>
                    </li>
                    <li>
                        <Link to='/project'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/todo'>Todo</Link>
                    </li>
                </ul>
            </nav>
        </HashRouter>

    )
}


export default MenuList
