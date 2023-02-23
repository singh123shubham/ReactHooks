import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for the API data
const DataContext = createContext([]);

// A custom hook to fetch the data
export function useData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return data;
}

export default DataContext;
