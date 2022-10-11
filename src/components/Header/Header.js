import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <div>
            <h1>Quiz Hungama</h1>
            </div> 
            <div>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>

            </div>
        </div>
    );
};

export default Header;
