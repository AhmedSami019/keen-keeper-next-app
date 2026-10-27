'use client'

import React, { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({children}) => {

    const [meetData, setMeetData] = useState([]) 

    const handleTimelineEntry = (friend, type)=> {
        const newMeetData = {
            id : crypto.randomUUID(), 
            friendId: friend.id,
            friendName : friend.name,
            type,
            date : new Date().toISOString()
        }
        setMeetData([newMeetData, ...meetData])
    }
    const data = {
        meetData,
        setMeetData,
        handleTimelineEntry
    }
    return (
        <DataContext value={data}>
            {children}
        </DataContext >
    );
};

export default DataProvider;