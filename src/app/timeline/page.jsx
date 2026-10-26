"use client"

import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const TimelinePage = () => {
    const {name} = useContext(DataContext)
    console.log(name);
    return (
        <div>
            this is timeline page
        </div>
    );
};

export default TimelinePage;