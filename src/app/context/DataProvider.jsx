import React from 'react';
import DataContext from './DataContext';

const DataProvider = ({children}) => {
    const data = {
        name: "sami"
    }
    return (
        <DataContext value={data}>
            {children}
        </DataContext >
    );
};

export default DataProvider;