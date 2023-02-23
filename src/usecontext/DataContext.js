import React, { createContext, useState } from 'react';

// Create a context for the data
export const DataContext = createContext();

// Create a provider for the data
export const DataProvider = ({ children }) => {
  const [stringData, setStringData] = useState('Shubham Singh');
  const [numberData, setNumberData] = useState(0);
  const [booleanData, setBooleanData] = useState(false);

  const studentDetails = {
    fname:"Shubham",
    lname:"Singh",
    Collage:"BBDU",
  }

  return (
    <DataContext.Provider value={{studentDetails, stringData, setStringData, numberData, setNumberData, booleanData, setBooleanData }}>
      {children}
    </DataContext.Provider>
  );
};
