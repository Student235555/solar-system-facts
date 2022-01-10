import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return ( 
        <>
            <h1>Ooops... Something went wrong!</h1>
            <p className='returnLink'><Link to="/">Return to the main page</Link></p>
        </>
     );
}
 
export default ErrorPage;