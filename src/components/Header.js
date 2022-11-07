import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 border-b-2 px-8">
                <div className="navbar-start">
                        <img className="w-12 mr-1" src="logo.png" alt="scheme-ctg" />
                        <Link to='/' className="btn btn-ghost normal-case rounded-none text-xl">SCHEME CTG</Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-2">
                        <li><Link to='blogs'>BLOGS</Link></li>
                    </ul>
                    {/* <Link className="btn">Log Out</Link> */}
                </div>
                </div>
        </div>
    );
};

export default Header;