import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return ( 
        <>
            <div>ERROR</div>
            <Link to="/">Return</Link>
        </>
     );
}
 
export default ErrorPage;