import React from 'react';
import HomePage from './HomePage';
import AgeCalculator from './AgeCalculator';
import Simulation from './Simulation';
import {Routes, Route} from 'react-router-dom';
import ErrorPage from './ErrorPage';

const Page = () => {
    return ( 
        <>
          <Routes>
            <Route path="/" element={<Simulation />} />
            <Route path="calculator" element={<AgeCalculator />} />
            <Route path="simulation" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
     );
}
 
export default Page;