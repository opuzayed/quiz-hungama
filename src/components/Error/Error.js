import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Sorry,Page not found.Please go to <Link to='/'><span style={{color:'blueviolet'}}>Home Page</span></Link></h2>
        </div>
    );
};

export default Error;