import React from 'react';
import '../styles/Header.css';
import {NavLink} from 'react-router-dom';

const list = [
    {name: "calculator", path: "/calculator"},
    {name: "simulation", path: "/simulation"},
];

const Header = () => {
    const menu = list.map(item => (
        <li key = {item.name} className="mainButton">
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))

    return ( 
        <nav>
            <ul className="mainRow">
                {menu}
            </ul>
          </nav>
     );
}
 
export default Header;