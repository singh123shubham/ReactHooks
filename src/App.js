import './App.css';
import ExampleUseEffect from './ExampleUseEffect';
import ExampleUseMemo from './ExampleUseMeno';
import ExampleuseState from './ExampleuseState';
import DataContext, { useData } from './ExampleUseContext';
import ContextList from './ContextList';
import { DataProvider } from './usecontext/DataContext';
import Child from './usecontext/Child';
import StudentDetails from './usecontext/StudentDetails';
import ParentCom from './useMemo/parentCom';
import Parent from './useCallback/ParentCom';
import ExampleUseReducer from './ExampleUseReducer';
import Task from './Task/Task';
import DataList from './Task/DataList';
import Interview from './interviewQ/Interview';
import Example1 from './UseStateAllTypesOfExample/Example1';
import Example2 from './UseStateAllTypesOfExample/Example2';
import Example3 from './UseStateAllTypesOfExample/Example3';
import Example4 from './UseStateAllTypesOfExample/Example4';
import Example5 from './UseStateAllTypesOfExample/Example5';
import Example6 from './UseStateAllTypesOfExample/Example6';
import Example7 from './UseStateAllTypesOfExample/Example7';
import Example8 from './UseStateAllTypesOfExample/Example8';


function App() {
  return (
    <div className="App">
     
      {/* <ExampleuseState/> */}

      {/* <ExampleUseEffect/> */}

      {/* <DataContext.Provider value={useData()}>
        <ContextList/>
      </DataContext.Provider> */}

      {/* <DataProvider>
        <Child/>
        <StudentDetails/>
      </DataProvider> */}

      {/* <ExampleUseMemo/>
      <ParentCom/> */}
       {/* <Parent/> */}

       {/* <ExampleUseReducer/> */}

       {/* <Task/> */}
       {/* <DataList/> */}

       {/* <Interview/> */}

       <Example1/>
       <Example2/>
       <Example3/>
       <Example4/>
       <Example5/>
       <Example6/>
       <Example7/>
       <Example8/>
    </div>
  );
}

export default App;
 