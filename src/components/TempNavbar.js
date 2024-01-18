import React from "react";
import { Link } from "react-router-dom";
import '../styles/TempNavbar.css';

function TempNavbar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/listpage'>ListPage</Link>
                </li>
                
            </ul>
        </nav>
    );
}

export default TempNavbar;