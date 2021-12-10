import React from 'react';
import '../styles/Header.css';
import {NavLink} from 'react-router-dom';

const list = [
    {name: "age calculator", path: "/calculator"},
    {name: "about planets", path: "/simulation"},
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
