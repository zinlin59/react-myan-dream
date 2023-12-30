import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Example = () => {

    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navbar />
            <h1>Dream myanmar user name is:</h1>

            <p>Name:{location.state.id} </p>

        </div>
    );
}



export default Example