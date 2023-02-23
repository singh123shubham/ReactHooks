import React, { useContext } from 'react';
import DataContext, { useData } from './ExampleUseContext';

function ContextList() {
  const data = useContext(DataContext);
  return (
   <>
   <h1>useContext Example</h1>
   <h4>pass add data from one components to other components with the help usecontext</h4>
   
   <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
   </>
  );
}

export default ContextList;
