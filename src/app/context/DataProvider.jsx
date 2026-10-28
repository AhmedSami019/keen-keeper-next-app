'use client'

import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({children}) => {

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        const getFriends = async()=>{
        const res = await fetch('http://localhost:3000/friends.json')
        const data = await res.json()
        setFriends(data)
    }
    getFriends()
    }, [])
    
    const [meetData, setMeetData] = useState([]) 

    console.log(friends);
    const handleTimelineEntry = (friend, type)=> {
        const newMeetData = {
            id : crypto.randomUUID(), 
            friendId: friend.id,
            friendName : friend.name,
            type,
            date : new Date().toDateString()
        }
        setMeetData([newMeetData, ...meetData])
    }
    const data = {
        meetData,
        setMeetData,
        friends,
        handleTimelineEntry
    }
    return (
        <DataContext value={data}>
            {children}
        </DataContext >
    );
};

export default DataProvider;