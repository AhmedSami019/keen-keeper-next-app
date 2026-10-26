'use client'

import React, { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({children}) => {

    const [meetData, setMeetData] = useState([
        {
            name: "sami",
            roll : 34
        }
    ]) 
    const data = {
        meetData,
        setMeetData
    }
    return (
        <DataContext value={data}>
            {children}
        </DataContext >
    );
};

export default DataProvider;