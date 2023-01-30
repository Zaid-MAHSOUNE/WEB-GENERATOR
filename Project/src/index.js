import React from 'react';
import ReactDOM from 'react-dom/client';
import ServiceNavbar from './ServiceNavbar'
import Navbar from './Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Navbar></Navbar>
    <ServiceNavbar></ServiceNavbar>
    </>
);


